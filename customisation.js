const selectors = {
    TabsWrapper: "[page-item=tab-wrapper]",
    PopupTabsWrapper: "[popup-item=tabs-wrapper]",
    CMWrapper: "[filter-type=ceiling-material]",
    WMWrapper: "[filter-type=wall-material]",
    FMWrapper: "[filter-type=flooring-material]",
    ACPWrapper: "[filter-type=acp-material]",
    WDWrapper: "[filter-type=wood-material]",
    CMradioBtnGroupName: "ceiling-material",
    WMradioBtnGroupName: "wall-material",
    FMradioBtnGroupName: "flooring-material",
    ACPRadioGroupName: "acp-material",
    WoodRadioGroupName: "wood-material",
    PageTotal: "[page-item=total]",
    CeilingImgs: "[image-type=cm]",
    WallImages: "[image-type=wm]",
    FloorImages: "[image-type=fm]",
    ACPImages: "[image-type=acpm]",
    WoodImages: "[image-type=wdm]",
    popupForm: "[page-item=popup-form]",
    bookNowBtnTab1: "[page-item=book-now-btn-1]",
    bookNowBtnTab2: "[page-item=book-now-btn-2]",
    resetBtn: "[page-item=reset-btn]",
    resetBtnTab2: "[page-item=resst-tab-2]",
    PageTotal2: "[page-item=total-tab-2]",
    grandTotal: "[popup-item=grand-total]",
    activeRadioBtn: "w--redirected-checked",
    activeTabBtn: "w--current",
    urlInput: 'input[name="product-url"]',
    grandTotalInput: 'input[name="product-total-price"]',
    interiorInput: 'input[name="interior"]',
    exteriorInput: 'input[name="exterior"]'
};

const elements = Object.keys(selectors).reduce((acc, key) => {
    acc[key] = document.querySelector(selectors[key]);
    return acc;
}, {});

const radioButtonGroups = {
    CM: document.querySelectorAll(`input[name="${selectors.CMradioBtnGroupName}"]`),
    WM: document.querySelectorAll(`input[name="${selectors.WMradioBtnGroupName}"]`),
    FM: document.querySelectorAll(`input[name="${selectors.FMradioBtnGroupName}"]`),
    ACP: document.querySelectorAll(`input[name="${selectors.ACPRadioGroupName}"]`),
    Wood: document.querySelectorAll(`input[name="${selectors.WoodRadioGroupName}"]`)
};

const imageGroups = {
    CM: document.querySelectorAll(selectors.CeilingImgs),
    WM: document.querySelectorAll(selectors.WallImages),
    FM: document.querySelectorAll(selectors.FloorImages),
    ACP: document.querySelectorAll(selectors.ACPImages),
    Wood: document.querySelectorAll(selectors.WoodImages)
};

let FinalValuesForInteriors = { cm: { value: "", price: "" }, wm: { value: "", price: "" }, fm: { value: "", price: "" } };
let FinalValuesForExterior = { acpm: { value: "", price: "" }, wdm: { value: "", price: "" } };

const updateImageByType = (type, value) => {
    Object.keys(imageGroups).forEach(key => {
        if (type === key.toLowerCase()) {
            imageGroups[key].forEach(img => {
                img.style.opacity = img.dataset.materialValue === value ? "1" : "0";
            });
        }
    });
};

const updatePageTotal = () => {
    const total = Object.values(FinalValuesForInteriors).reduce((sum, { price }) => sum + parseFloat(price || 0), 0);
    elements.PageTotal.innerText = total.toFixed(2);
    return total;
};

const updatePageTotal2 = () => {
    const total = Object.values(FinalValuesForExterior).reduce((sum, { price }) => sum + parseFloat(price || 0), 0);
    elements.PageTotal2.innerText = total.toFixed(2);
    return total;
};

const updateQueryParams = () => {
    const url = new URL(window.location.href);
    Object.entries(FinalValuesForInteriors).forEach(([key, { value }]) => {
        if (value) url.searchParams.set(key, value);
    });
    Object.entries(FinalValuesForExterior).forEach(([key, { value }]) => {
        if (value) url.searchParams.set(key, value);
    });
    window.history.pushState(null, null, url);
};

const resetQueryParams = (tab) => {
    const url = new URL(window.location.href);
    if (tab === 1) {
        ["cm", "wm", "fm"].forEach(param => url.searchParams.delete(param));
    } else if (tab === 2) {
        ["acpm", "wdm"].forEach(param => url.searchParams.delete(param));
    }
    window.history.pushState(null, null, url);
};

const resetImageStylesOnTab1 = () => {
    [...imageGroups.CM, ...imageGroups.WM, ...imageGroups.FM].forEach(img => img.style.opacity = "0");
};

const resetImageStylesOnTab2 = () => {
    [...imageGroups.ACP, ...imageGroups.Wood].forEach(img => img.style.opacity = "0");
};

const resetRadioButtons = () => {
    Object.values(radioButtonGroups).flat().forEach(rb => {
        rb.checked = false;
        rb.previousSibling.classList.remove(selectors.activeRadioBtn);
    });
};

const resetRadioButtonsOnTab1 = () => {
    [...radioButtonGroups.CM, ...radioButtonGroups.WM, ...radioButtonGroups.FM].forEach(rb => {
        rb.checked = false;
        rb.previousSibling.classList.remove(selectors.activeRadioBtn);
    });
};

const resetRadioButtonsOnTab2 = () => {
    [...radioButtonGroups.ACP, ...radioButtonGroups.Wood].forEach(rb => {
        rb.checked = false;
        rb.previousSibling.classList.remove(selectors.activeRadioBtn);
    });
};

const resetFinalStateValues = () => {
    FinalValuesForInteriors = { cm: { value: "", price: "" }, wm: { value: "", price: "" }, fm: { value: "", price: "" } };
};

const resetFinalStateValues2 = () => {
    FinalValuesForExterior = { acpm: { value: "", price: "" }, wdm: { value: "", price: "" } };
};

const updateAppState = (cm, wm, fm, acpm, wdm) => {
    const updateStateForType = (type, value, radioButtons, finalValues) => {
        radioButtons.forEach(rb => {
            if (rb.dataset.value === value) {
                rb.checked = true;
                rb.previousSibling.classList.add(selectors.activeRadioBtn);
                updateImageByType(type, value);
                finalValues[type] = { value, price: rb.dataset.price };
            }
        });
    };

    updateStateForType("cm", cm, radioButtonGroups.CM, FinalValuesForInteriors.cm);
    updateStateForType("wm", wm, radioButtonGroups.WM, FinalValuesForInteriors.wm);
    updateStateForType("fm", fm, radioButtonGroups.FM, FinalValuesForInteriors.fm);
    updateStateForType("acpm", acpm, radioButtonGroups.ACP, FinalValuesForExterior.acpm);
    updateStateForType("wdm", wdm, radioButtonGroups.Wood, FinalValuesForExterior.wdm);

    updatePageTotal();
    updatePageTotal2();
};

const updateGrandTotalNHiddenInputs = () => {
    const total = updatePageTotal() + updatePageTotal2();
    elements.grandTotal.innerText = total.toFixed(2);
    elements.grandTotalInput.value = total.toFixed(2);
    elements.urlInput.value = window.location.href;

    const { cm, wm, fm } = FinalValuesForInteriors;
    const { acpm, wdm } = FinalValuesForExterior;

    elements.interiorInput.value = `${cm.value}-${wm.value}-${fm.value}`;
    elements.exteriorInput.value = `${acpm.value}-${wdm.value}`;
};

const displayPopupForm = () => {
    updateGrandTotalNHiddenInputs();
    elements.popupForm.style.display = "block";
};

elements.TabsWrapper.addEventListener("click", e => {
    const tabName = e.target.innerText;
    document.querySelectorAll(`${selectors.PopupTabsWrapper} > a`).forEach(tab => {
        if (tab.dataset.wTab?.toUpperCase() === tabName) {
            tab.classList.toggle(selectors.activeTabBtn);
            tab.setAttribute("aria-selected", true);
        }
    });
});

elements.PopupTabsWrapper.addEventListener("click", e => {
    const tabName = e.target.innerText;
    document.querySelectorAll(`${selectors.TabsWrapper} > a`).forEach(tab => {
        if (tab.dataset.wTab?.toUpperCase() === tabName) {
            tab.classList.toggle(selectors.activeTabBtn);
            tab.setAttribute("aria-selected", true);
        }
    });
});

elements.bookNowBtnTab1.addEventListener("click", () => {
    updateAppState(FinalValuesForInteriors.cm.value, FinalValuesForInteriors.wm.value, FinalValuesForInteriors.fm.value, FinalValuesForExterior.acpm.value, FinalValuesForExterior.wdm.value);
    displayPopupForm();
});

elements.bookNowBtnTab2.addEventListener("click", () => {
    updateAppState(FinalValuesForInteriors.cm.value, FinalValuesForInteriors.wm.value, FinalValuesForInteriors.fm.value, FinalValuesForExterior.acpm.value, FinalValuesForExterior.wdm.value);
    displayPopupForm();
});

elements.resetBtn.addEventListener("click", () => {
    resetQueryParams(1);
    resetImageStylesOnTab1();
    resetRadioButtonsOnTab1();
    resetFinalStateValues();
    updatePageTotal();
    updateGrandTotalNHiddenInputs();
});

elements.resetBtnTab2.addEventListener("click", () => {
    resetQueryParams(2);
    resetImageStylesOnTab2();
    resetRadioButtonsOnTab2();
    resetFinalStateValues2();
    updatePageTotal2();
    updateGrandTotalNHiddenInputs();
});
