const INDEX_APP = (() => {
    'use strict';

    const bannerBgTemplate = (index) => {
        let bgPosition
        switch (index) {
            case 2:
                bgPosition = '17.5% 100%'
                break
            case 3:
                bgPosition = '60% 100%'
                break
            default:
                bgPosition = 'center'
        }
        return `
                <div class="main_banner_item" style="background: no-repeat ${bgPosition}/cover url(images/pages/index/banner-bg${index}.jpg);"></div>
               `
    }

    const scheduleTemplate = (schedule, index) => {
        const scheduleNum = index + 1
        const separator = `<div class="separator "></div>`
        const pulse =
            `
                <div class="pulse_img mx-auto">
                    <div class="img_icon blue">
                        <span class="pluse_1"></span>
                    </div>
                </div>
            `
        const applyBtn =
            `
    
                <a href="/apply.html" class="app_btn btn_hover cus_mb-10 apply-btn">지원하기</a>
            `

        return `
               <div class="col-lg-3 col-sm-6">
                    <div class="schedule_item text-center relative">
                        <div class="number">
                            <span class="z-10 relative">${scheduleNum}</span>
                            ${scheduleNum === 3 ? pulse : ''}     
                        </div>
                        ${scheduleNum === 1 || scheduleNum === 5 ? '' : separator}
                        <div class="new_calendar_content">
                            <h4 class="f_size_20 f_p f_500">${schedule.title}</h4>
                            <p class="f_400 f_size_15 mb-0">${schedule.content}</p>
                        </div>
                    </div>
                </div>
                `
    }

    const createSchedule = () => {
        const schedules = [
            {
                title: '서류지원',
                content: `10월 25일(금) 15시 <br/>~ 11월 5일(화) 10시`
            },
            {
                title: '온라인 코딩 테스트',
                content: '11월 9일(토) 12시 ~ 16시'
            },
            {
                title: '1차 합격자 발표',
                content: '11월 20일(수) 15시'
            },
            {
                title: '프리코스',
                content: `11월 27일(수) <br/>~ 12월 18일(수)`
            },
            {
                title: '최종 테스트',
                content: '12월 21일(토)'
            },
            {
                title: '최종 합격자 발표',
                content: '2020년 1월 3일(금) 15시'
            },
            {
                title: '교육 시작',
                content: '2020년 2월 4일(화)'
            },
            {
                title: '교육 종료',
                content: '2020년 11월 말'
            }
        ]

        const scheduleContainer = document.getElementById('calender-container')
        schedules.map((schedule, index) => scheduleContainer.insertAdjacentHTML('beforeend', scheduleTemplate(schedule, index)))
    }

    const createBannerBgImages = () => {
        const bannerBgNum = 9
        let index = 1

        while (index < bannerBgNum) {
            document.getElementById('banner-cover-container').insertAdjacentHTML('afterbegin', bannerBgTemplate(index++))
        }
    }

    const initModal = () => {
        if (document.cookie.indexOf("ncookie=done") < 0) {
            showModal('modal-lg')
            document.getElementById('today-close-btn').addEventListener('click', () => {
                setCookie( "ncookie","done",24)
                hideModal('modal-lg')
            })
        } else {
            document.getElementById('modal-lg').classList.add('d-none')
        }

    }

    const showModal = (id) => {
        $(`#${id}`).modal('show')
    }

    const hideModal = (id) => {
        $(`#${id}`).modal('hide')
    }

    const setCookie = (name, value, expirehours) => {
        const todayDate = new Date()
        todayDate.setHours( todayDate.getHours() + expirehours )
        document.cookie = `${name}=${escape(value)};path=/; expires=${todayDate.toGMTString()};`
    }

    const init = () => {
        createBannerBgImages()
        createSchedule()
    }

    return {
        init: init,
    }
})()

INDEX_APP.init()
