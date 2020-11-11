import $ from "jquery";
import ScrollMagic from "scrollmagic"
import {
    TimelineMax,
} from 'gsap';

import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";


export default function () {
    const pinWrapper = document.querySelectorAll('.pin-wrapper')
    var controller = new ScrollMagic.Controller();

    var Scene01 = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: '#phone01',
            duration: "100%"
        })
        .setPin('#phone01 .pin-wrapper')
        .addTo(controller)

    var Scene02 = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: '#phone01',
            duration: "200%"
        })
        .setPin('#phone02 .pin-wrapper')
        .addTo(controller)

    var Scene03 = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: '#phone02',
            duration: "200%"
        })
        .setPin('#phone03 .pin-wrapper')
        .addTo(controller)

    var Scene04 = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: '#phone03',
            duration: "200%"
        })
        .setPin('#phone04 .pin-wrapper')
        .addTo(controller)


    pinWrapper.forEach((ele) => {
        var sceneEnter = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: ele,
                duration: "100%"
            })
            .on("enter", function (e) {
                const current = e.target.triggerElement();
                removeActiveClass();
                current.classList.add('active')
            })
            .addTo(controller)
    })


    function removeActiveClass() {
        const pinWrapper = document.querySelectorAll('.pin-wrapper');
        pinWrapper.forEach(item => {
            item.classList.remove('active')
        })
    }
}