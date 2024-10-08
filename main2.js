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
        exteriorInput: 'input[name="exterior"]',
        BASE_PRICE_INTERIOR: "1200", // Replace 100 with your desired base price for interiors
        BASE_PRICE_EXTERIOR: "1500",  // Replace 50 with your desired base price for exteriors

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
let FinalValuesForInteriors = {
        cm: {
            value: "",
            : ""
        },
        wm: {
            value: "",
            : ""
        },
        fm: {
            value: "",
            : ""
        }
    },
    FinalValuesForExterior = {
        acpm: {
            value: "",
            : ""
        },
        wdm: {
            value: "",
            : ""
        }
    };
CMWrapperEle.addEventListener("click", (e => {
    e.stopPropagation();
    let a = {
        value: "",
        : ""
    };
    for (const e of radioButtonsForCM)
        if (e.checked) {
            a.value = e.dataset.value, a. = e.dataset.;
            break
        } FinalValuesForInteriors.cm = a, updateImageByType("cm", a.value), updatePageTotal(), updateQueryParams()
})), WMWrapperEle.addEventListener("click", (e => {
    e.stopPropagation();
    let a = {
        value: "",
        : ""
    };
    for (const e of radioButtonsForWM)
        if (e.checked) {
            a.value = e.dataset.value, a.price = e.dataset.price;
            break
        } FinalValuesForInteriors.wm = a, updateImageByType("wm", a.value), updatePageTotal(), updateQueryParams()
})), FMWrapperEle.addEventListener("click", (e => {
    e.stopPropagation();
    let a = {
        value: "",
        price: ""
    };
    for (const e of radioButtonsForFM)
        if (e.checked) {
            a.value = e.dataset.value, a.price = e.dataset.price;
            break
        } FinalValuesForInteriors.fm = a, updateImageByType("fm", a.value), updatePageTotal(), updateQueryParams()
})), ACPWrapperEle.addEventListener("click", (e => {
    e.stopPropagation();
    let a = {
        value: "",
        price: ""
    };
    for (const e of radioButtonsForACP)
        if (e.checked) {
            a.value = e.dataset.value, a.price = e.dataset.price;
            break
        } FinalValuesForExterior.acpm = a, updateImageByType("acpm", a.value), updatePageTotal2(), updateQueryParams()
})), WoodWrapperEle.addEventListener("click", (e => {
    e.stopPropagation();
    let a = {
        value: "",
        price: ""
    };
    for (const e of radioButtonsForWood)
        if (e.checked) {
            a.value = e.dataset.value, a.price = e.dataset.price;
            break
        } FinalValuesForExterior.wdm = a, updateImageByType("wdm", a.value), updatePageTotal2(), updateQueryParams()
}));
const updatePageTotal = () => {
        let e = "BASE_PRICE_INTERIOR";
        return "" !== FinalValuesForInteriors.cm.price && (e += parseFloat(FinalValuesForInteriors.cm.price)), "" !== FinalValuesForInteriors.wm.price && (e += parseFloat(FinalValuesForInteriors.wm.price)), "" !== FinalValuesForInteriors.fm.price && (e += parseFloat(FinalValuesForInteriors.fm.price)), PageTotalEle.innerText = e?.toFixed(2), e
    },
    updatePageTotal2 = () => {
        let e = "BASE_PRICE_EXTERIOR";
        return "" !== FinalValuesForExterior.acpm.price && (e += parseFloat(FinalValuesForExterior.acpm.price)), "" !== FinalValuesForExterior.wdm.price && (e += parseFloat(FinalValuesForExterior.wdm.price)), PageTotal2Ele.innerText = e?.toFixed(2), e
    },
    updateQueryParams = () => {
        const e = new URL(window.location.href);
        "" !== FinalValuesForInteriors.cm.value && e.searchParams.set("cm", FinalValuesForInteriors.cm.value), "" !== FinalValuesForInteriors.wm.value && e.searchParams.set("wm", FinalValuesForInteriors.wm.value), "" !== FinalValuesForInteriors.fm.value && e.searchParams.set("fm", FinalValuesForInteriors.fm.value), "" !== FinalValuesForExterior.acpm.value && e.searchParams.set("acpm", FinalValuesForExterior.acpm.value), "" !== FinalValuesForExterior.wdm.value && e.searchParams.set("wdm", FinalValuesForExterior.wdm.value), window.history.pushState(null, null, e)
    },
    resetQueryParams = (e = 1) => {
        let a = window.location.href.split("?")[0];
        const t = new URL(window.location.href),
            r = new URLSearchParams(t.search);
        1 === e && (r.delete("cm"), r.delete("wm"), r.delete("fm")), 2 === e && (r.delete("acpm"), r.delete("wdm")), r && (a += `?${r}`);
        const o = new URL(a);
        window.history.pushState(null, null, o)
    },
    updateImageByType = (e = "cm", a) => {
        if ("cm" === e)
            for (let e of allCMImages) {
                const t = e.dataset.materialValue;
                e.style.opacity = "0", t === a && (e.style.opacity = "1")
            }
        if ("wm" === e)
            for (let e of allWMImages) {
                const t = e.dataset.materialValue;
                e.style.opacity = "0", t === a && (e.style.opacity = "1")
            }
        if ("fm" === e)
            for (let e of allFMImages) {
                const t = e.dataset.materialValue;
                e.style.opacity = "0", t === a && (e.style.opacity = "1")
            }
        if ("acpm" === e)
            for (let e of allACPImages) {
                const t = e.dataset.materialValue;
                e.style.opacity = "0", t === a && (e.style.opacity = "1")
            }
        if ("wdm" === e)
            for (let e of allWoodImages) {
                const t = e.dataset.materialValue;
                e.style.opacity = "0", t === a && (e.style.opacity = "1")
            }
    },
    resetImageStylesOnTab1 = () => {
        [...allCMImages, ...allWMImages, ...allFMImages].forEach((e => e.style.opacity = "0"))
    },
    resetImageStylesOnTab2 = () => {
        [...allACPImages, ...allWoodImages].forEach((e => e.style.opacity = "0"))
    },
    resetRadioButtons = () => {
        allRadioButtons.forEach((e => {
            e.checked = !1, e.previousSibling.classList.remove(selectors.activeRadioBtn)
        }))
    },
    resetRadioButtonsOnTab1 = () => {
        [...radioButtonsForCM, ...radioButtonsForWM, ...radioButtonsForFM].forEach((e => {
            e.checked = !1, e.previousSibling.classList.remove(selectors.activeRadioBtn)
        }))
    },
    resetRadioButtonsOnTab2 = () => {
        [...radioButtonsForACP, ...radioButtonsForWood].forEach((e => {
            e.checked = !1, e.previousSibling.classList.remove(selectors.activeRadioBtn)
        }))
    },
    resetFinalStateValues = () => {
        FinalValuesForInteriors = {
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
        }
    },
    resetFinalStateValues2 = () => {
        FinalValuesForExterior = {
            acpm: {
                value: "",
                price: ""
            },
            wdm: {
                value: "",
                price: ""
            }
        }
    },
    updateAppState = (e, a, t, r, o) => {
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
        const e = updatePageTotal() + updatePageTotal2();
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
