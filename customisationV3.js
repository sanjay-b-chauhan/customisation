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
},
TabsWrapperEle = document.querySelector(selectors.TabsWrapper),
PopupTabsEle = document.querySelector(selectors.PopupTabsWrapper),
CMWrapperEle = document.querySelector(selectors.CMWrapper),
WMWrapperEle = document.querySelector(selectors.WMWrapper),
FMWrapperEle = document.querySelector(selectors.FMWrapper),
ACPWrapperEle = document.querySelector(selectors.ACPWrapper),
WoodWrapperEle = document.querySelector(selectors.WDWrapper),
PageTotalEle = document.querySelector(selectors.PageTotal),
PageTotal2Ele = document.querySelector(selectors.PageTotal2),
GrandTotalEle = document.querySelector(selectors.grandTotal),
popupFormEle = document.querySelector(selectors.popupForm),
bookNowBtn1Ele = document.querySelector(selectors.bookNowBtnTab1),
bookNowBtn2Ele = document.querySelector(selectors.bookNowBtnTab2),
resetBtnEle = document.querySelector(selectors.resetBtn),
resetBtn2Ele = document.querySelector(selectors.resetBtnTab2),
urlInputEle = document.querySelector(selectors.urlInput),
grandTotalInputEle = document.querySelector(selectors.grandTotalInput),
interiorInputEle = document.querySelector(selectors.interiorInput),
exteriorInput = document.querySelector(selectors.exteriorInput),
radioButtonsForCM = document.querySelectorAll(`input[name="${selectors.CMradioBtnGroupName}"]`),
radioButtonsForWM = document.querySelectorAll(`input[name="${selectors.WMradioBtnGroupName}"]`),
radioButtonsForFM = document.querySelectorAll(`input[name="${selectors.FMradioBtnGroupName}"]`),
radioButtonsForACP = document.querySelectorAll(`input[name="${selectors.ACPRadioGroupName}"]`),
radioButtonsForWood = document.querySelectorAll(`input[name="${selectors.WoodRadioGroupName}"]`),
allRadioButtons = document.querySelectorAll("input[type=radio]"),
allCMImages = document.querySelectorAll(selectors.CeilingImgs),
allWMImages = document.querySelectorAll(selectors.WallImages),
allFMImages = document.querySelectorAll(selectors.FloorImages),
allACPImages = document.querySelectorAll(selectors.ACPImages),
allWoodImages = document.querySelectorAll(selectors.WoodImages);


// Select elements using attribute selectors
const interiorElement = document.querySelector('[base-price="interior-price"]');
const exteriorElement = document.querySelector('[base-price="exterior-price"]');

// Get the data-price values
const interiorPrice = parseFloat(interiorElement.getAttribute('data-price')); // 150
const exteriorPrice = parseFloat(exteriorElement.getAttribute('data-price')); // 200

// Log or use the values as needed
console.log('Interior Price:', interiorPrice); // Outputs: 150
    e && radioButtonsForCM.forEach((a => {
        const t = a.dataset.value,
            r = a.dataset.price;
        t === e && (a.checked = !0, a.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("cm", e), FinalValuesForInteriors.cm = {
            value: t,
            price: r
        })
    })), a && radioButtonsForWM.forEach((e => {
        const t = e.dataset.value,
            r = e.dataset.price;
        t === a && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("wm", a), FinalValuesForInteriors.wm = {
            value: t,
            price: r
        })
    })), t && radioButtonsForFM.forEach((e => {
        const a = e.dataset.value,
            r = e.dataset.price;
        a === t && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("fm", t), FinalValuesForInteriors.fm = {
            value: a,
            price: r
        })
    })), r && radioButtonsForACP.forEach((e => {
        const a = e.dataset.value,
            t = e.dataset.price;
        a === r && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("acpm", r), FinalValuesForExterior.acpm = {
            value: a,
            price: t
        })
    })), o && radioButtonsForWood.forEach((e => {
        const a = e.dataset.value,
            t = e.dataset.price;
        a === o && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("wdm", o), FinalValuesForExterior.wdm = {
            value: a,
            price: t
        })
    })), updatePageTotal(), updatePageTotal2()
},
updateGrandTotalNHiddenInputs = () => {
    const e = updatePageTotal2();
    GrandTotalEle.innerText = e?.toFixed(2), grandTotalInputEle.value = e?.toFixed(2), urlInputEle.value = window.location.href;
    const {
        cm: a,
        fm: t,
        wm: r
    } = FinalValuesForInteriors, {
        acpm: o,
        wdm: l
    } = FinalValuesForExterior;
    interiorInputEle.value = `${a.value}-${r.value}-${t.value}`, exteriorInput.value = `${o.value}-${l.value}`
},
displayPopupForm = () => {
    updateGrandTotalNHiddenInputs(), popupFormEle.style.display = "block"
};
TabsWrapperEle.addEventListener("click", (e => {
const a = e.target.innerText;
document.querySelectorAll(`${selectors.PopupTabsWrapper} > a`).forEach((e => {
    e.dataset.wTab?.toUpperCase() === a && (e.classList.toggle(selectors.activeTabBtn), e.setAttribute("aria-selected", !0))
}))
})), PopupTabsEle.addEventListener("click", (e => {
const a = e.target.innerText;
document.querySelectorAll(`${selectors.TabsWrapper} > a`).forEach((e => {
    e.dataset.wTab?.toUpperCase() === a && e.classList.toggle(selectors.activeTabBtn), e.setAttribute("aria-selected", !0)
}))
})), bookNowBtn1Ele.addEventListener("click", displayPopupForm), bookNowBtn2Ele.addEventListener("click", displayPopupForm), resetBtnEle.addEventListener("click", (e => {
resetImageStylesOnTab1(), resetQueryParams(1), [...radioButtonsForCM, ...radioButtonsForWM, ...radioButtonsForFM].forEach((e => {
    e.checked = !1, e.previousSibling.classList.remove(selectors.activeRadioBtn)
})), FinalValuesForInteriors = {
    cm: {
        value: "",
        price: ""
    },
    wm: {
        value: "",
        price: ""
    },
    fm: {
        value: "",
        price: ""
    }
}, updatePageTotal()
})), resetBtn2Ele.addEventListener("click", (e => {
resetImageStylesOnTab2(), resetQueryParams(2), [...radioButtonsForACP, ...radioButtonsForWood].forEach((e => {
    e.checked = !1, e.previousSibling.classList.remove(selectors.activeRadioBtn)
})), FinalValuesForExterior = {
    acpm: {
        value: "",
        price: ""
    },
    wdm: {
        value: "",
        price: ""
    }
}, updatePageTotal2()
})), window.addEventListener("load", (e => {
const a = new URL(window.location.href),
    t = a.searchParams.get("cm"),
    r = a.searchParams.get("wm"),
    o = a.searchParams.get("fm"),
    l = a.searchParams.get("acpm"),
    s = a.searchParams.get("wdm");
var i, c, n, u, p;
c = r, n = o, u = l, p = s, (i = t) && radioButtonsForCM.forEach((e => {
    const a = e.dataset.value,
        t = e.dataset.price;
    a === i && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("cm", i), FinalValuesForInteriors.cm = {
        value: a,
        price: t
    })
})), c && radioButtonsForWM.forEach((e => {
    const a = e.dataset.value,
        t = e.dataset.price;
    a === c && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("wm", c), FinalValuesForInteriors.wm = {
        value: a,
        price: t
    })
})), n && radioButtonsForFM.forEach((e => {
    const a = e.dataset.value,
        t = e.dataset.price;
    a === n && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("fm", n), FinalValuesForInteriors.fm = {
        value: a,
        price: t
    })
})), u && radioButtonsForACP.forEach((e => {
    const a = e.dataset.value,
        t = e.dataset.price;
    a === u && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("acpm", u), FinalValuesForExterior.acpm = {
        value: a,
        price: t
    })
})), p && radioButtonsForWood.forEach((e => {
    const a = e.dataset.value,
        t = e.dataset.price;
    a === p && (e.checked = !0, e.previousSibling.classList.add(selectors.activeRadioBtn), updateImageByType("wdm", p), FinalValuesForExterior.wdm = {
        value: a,
        price: t
    })
})), updatePageTotal(), updatePageTotal2(), t || r || o || l || s || (resetImageStylesOnTab1(), resetImageStylesOnTab2())
}));
