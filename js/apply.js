const CURRICULUM_APP = (() => {
    'use strict';
    const applyStepTemplate = (item, index) => {

        const disabledBtn =
                            `
                            <a class="btn btn-default mrg-top-30 width-100 text-center border-radius-round font-size-20 disabled">
                                지원마감
                            </a>
                            `

        return `
                <div class="setup_item row">
                    <div class="col-md-5 setup_img">
                        <img src="${item.imgUrl}" width="350px" alt="">
                    </div>
                    <div class="col-md-2 s_number desktop-view">
                        <div class="round">0${index + 1}</div>
                    </div>
                    <div class="col-md-5">
                        <div class="setup_content">
                            <h4 class="mrg-top-20 text-align-justify-sm">
                                <span class="mobile-view font-size-50">${index + 1}. </span>
                                ${item.title}
                            </h4>
                            <p class="markdown pdd-top-20 text-align-justify-sm">
                               ${item.contents}
                            </p>
                            ${index === 4 ? disabledBtn : ''}
                        </div>
                    </div>
                    <div class="line bottom_half height"></div>
                </div>
                    `
    }

    const init = () => {

        const applySteps = [
            {
                title: '프로그래밍 학습 과정과 현재 자신이 생각하는 역량은?',
                imgUrl: 'images/pages/apply/apply_step_01.png',
                contents: `
                            우아한테크코스는 <strong><b>프로그래밍에 대한 기본 지식과 경험을 가진 교육생</b></strong>을 
                            선발하기 때문에
                            프로그래밍 경험이 있는 상태에서 지원하게 됩니다.
                            프로그래밍 학습을 어떤 계기로 시작했으며, 어떻게 학습해왔는지,
                            이를 통해 <strong><b> 현재 어느 정도의 역량을 보유한 상태</b></strong>인지를 구체적으로 작성해 주세요.
                          `

            },
            {
                title: '프로그래머가 되려는 이유는 무엇인가요?',
                imgUrl: 'images/pages/apply/apply_step_02.png',
                contents: `
                            어떤 계기로 프로그래머라는 직업을 꿈꾸게 되었나요?
                            프로그래밍을 배워 <strong><b>최종적으로 하고 싶은 일</b></strong>이 무엇인지,
                            프로그래밍을 통해 <strong><b>만들고 싶은 소프트웨어</b></strong>가 있다면 무엇인지에 대해 작성해 주세요.
                          `

            },
            {
                title: '마음이 끌리는 무엇인가에 몰입해 일정 수준의 결과물을 만들어 낸 경험이 있나요?',
                imgUrl: 'images/pages/apply/apply_step_03.png',
                contents: `
                            지금까지 살아오면서  <strong><b>마음이 끌리는 무엇인가에 시간을 투자해 결과물을 만들어 낸 것</b></strong>이 있다면 공유해 주세요.
                            반드시 소프트웨어와 관련된 일이 아니어도 괜찮습니다.
                            어떤 성과를 냈는지도 중요하지만  <strong><b>어떤 과정과 노력을 통해 그런 성과를 낼 수 있었는지</b></strong>를 구체적으로 작성해 주시면 더 좋습니다.

                          `

            },
            {
                title: '우아한테크코스에 참여하려는 이유는 무엇인가요?',
                imgUrl: 'images/pages/apply/apply_step_04.png',
                contents: `
                            우아한테크코스는 <strong><b> 자기주도적으로 학습해야 하며, 동료들과 공동으로 학습하고 같이 성장</b></strong>하는 방식으로 진행합니다.
                            지금까지 우리가 흔히 알고 있는 교육 과정보다 훨씬 더 힘들 수 있습니다.
                            또한 10개월이라는 시간이 여러분의 삶에 상당히 중요한 시간일 수 있습니다.
                            이런 중요한 시기에 <strong><b>우아한테크코스 교육 과정에 참여하고 싶은 이유</b></strong>는 무엇인가요?
                          `

            },
            {
                title: '지원할 준비가 되었나요?',
                imgUrl: 'images/pages/apply/apply_step_05.png',
                contents: `
                           우아한테크코스는 10개월 동안 함께 성장할 여러분의 진솔한 이야기를 기다립니다.
                          `
            }

        ]

        const applyContainer = document.getElementById('apply-container')

        applySteps.map((step, index) => applyContainer.insertAdjacentHTML('beforeend', applyStepTemplate(step, index)))
    }

    return {
        init: init,
    }
})()

CURRICULUM_APP.init()
