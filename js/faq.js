const FAQ_APP = (() => {
    'use strict';
    const questionTemplate = (question) => {
        return `
                    <div class="row width-90 mx-auto mrg-btm-40">
                        <div class="col-md-6">
                            <h4 class="font-size-19">${question.title}</h4>
                        </div>
                        <div class="col-md-6">
                            <p class="markdown font-size-15">
                               ${question.content}
                            </p>
                        </div>
                    </div>
                    `
    }

    const init = () => {

        const applyQuestions = [
            {
                title: '1. 컴퓨터 관련 전공자만 참가할 수 있나요?',
                category: 'apply-questions-container"',
                content:
                        `
                          전공과 상관없이 지원 가능합니다.
                          다만, 본 교육 과정은 <strong><b>프로그래밍에 대한 기본 지식과 경험</b></strong>을 가지신 분들이 참여하실 수 있습니다.
                          프로그래밍 에 대한 기본 지식과 경험에 대한 자세한 내용은
                          <a href="https://woowabros.github.io/techcourse/2019/10/14/woowacourse.html" target="_blank" class="text-dark text-bold">
                              <i class="ti-new-window text-dark text-bold relative left-5"></i>
                              <span class="text-bold f_600 pdd-right-0">[우아한테크코스 2기 모집]</span>
                          </a>글을 참고하기 바랍니다.
                        `
            },
            {
                title: '2. 회사를 다니고 있는 주니어 개발자나 개발 경력이 있는 사람도 지원 가능한가요?',
                category: 'apply-questions-container"',
                content:
                        `
                          <strong><b>프로그래머로서 취업경험이 없는</b></strong> 분들을 대상으로 합니다.
                          다른 직업군에서 프로그래머로 전향하는 경우는 가능합니다.

                        `
            },
            {
                title: '3. 온라인 코딩 테스트는 어떤 언어로 테스트 하나요?',
                category: 'apply-questions-container"',
                content:
                        `
                         온라인 코딩테스트에서는 <strong><b>Java, C++, Python2, Python3, Javascript, Kotlin, Swift</b></strong>
                         를 지원할 예정입니다. 자신있는 언어로 참여하시면 됩니다. 하지만 프리코스부터 Java 언어를 활용하여
                         미션을 진행하기 때문에 <strong><b>오프라인 코딩테스트는 Java 언어</b></strong>로 코딩테스트를 보게 됩니다.

                        `
            },
            {
                title: '4. 온라인 코딩테스트는 알고리즘 문제풀이 형식으로 진행되나요?',
                category: 'apply-questions-container"',
                content:
                        `
                        온라인 코딩테스트는 알고리즘 위주의 문제보다는 <strong><b>논리적인 사고력을 검증하는 문제 위주</b></strong>로 출제될 예정입니다.</p>

                        `
            },
            {
                title: '5. 지원 과정을 보면 프리코스가 있는데 프리코스에서 무슨 활동을 하나요? ',
                category: 'apply-questions-container"',
                content:
                        `
                           프리코스는 온라인 코딩 테스트를 통과한 사람들을 대상으로 <strong><b>본 과정을 미리 경험해 보는 단계입니다.</b></strong>
                           본 과정과 같이 매주 미션을 하나씩 구현하고 제출하는 방식으로 진행합니다.
                           이 과정을 통해 지원자는 본 과정을 미리 경험해 보면서 교육의 참여 여부를 결정할 수 있습니다.

                        `
            },
            {
                title: '6. 면접은 어떤 방식으로 진행되나요?',
                category: 'apply-questions-container"',
                content:
                        `
                          면접은 진행하지 않고 <strong><b>자기소개서, 프리코스, 오프라인 코딩 테스트</b></strong>를
                          기반으로 합격생을 선발합니다.
                        `
            },
            {
                title: '7. 최종 선발 인원은 몇 명인가요?',
                category: 'apply-questions-container"',
                content:
                        `
                           최종 선발 인원은 <strong><b>50명 내외</b></strong>입니다.

                        `
            }
        ]
        const programQuestions = [
            {
                title: '1. 우아한테크코스 참여시 교육 비용은 어떻게 되나요?',
                category: 'program-questions-container"',
                content:
                        `
                            우아한테크코스는 4주 기준 100만원 수준의 강의료를 책정하고 있습니다.
                            단, <strong><b>강의료 전액을 우아한형제들이 지원합니다. </b></strong>
                        `
            },
            {
                title: '2. 교육 시간과 장소는 어떻게 되나요?',
                category: 'program-questions-container',
                content:
                        `
                            공식적인 교육 시간은  <strong><b>월요일 1시 ~ 6시, 화~금 10시 ~ 6시</b></strong>로 진행합니다.
                            장소는 우아한형제들 회사 내 오프라인 교육장(한국루터회관)이 마련되어 있습니다.
                            대부분의 교육을 온라인 피드백으로 진행하지만 교육은 오프라인 공간에 모여 같이 학습하고 협업하는 방식으로 진행합니다.
                            공식적인 교육 시간 외에도 정해진 시간 내에 오프라인 교육장을 자유롭게 사용할 수 있습니다.
                        `
            },
            {
                title: '3. 우아한테크코스 참여시 실습할 장비는 지급하나요?',
                category: 'program-questions-container',
                content:
                        `
                            우아한테크코스는 <strong><b>별도의 장비를 지급하지 않습니다.</b></strong> 개인 실습 장비는 각자 준비해야 합니다.
                        `
            },
            {
                title: '4. 수료의 기준이 어떻게 되나요?',
                category: 'program-questions-container',
                content:
                    `
                            우아한테크코스는 <strong><b>4개의 레벨</b></strong>로 구성되어 있습니다. 4개의 레벨을 모두 수료해야 최종 수료할 수 있습니다.
                        `
            }
        ]
        const etcQuestions = [
            {
                title: '1. 학교, 직장 등과 병행이 가능한가요?',
                category: 'etc-questions-container"',
                content:
                        `
                           정해진 교육 시간동안  <strong><b>반드시 오프라인 교육에 참여하는 것을 기본 원칙</b></strong>으로 하고 있기 때문에 병행은 불가능합니다.
                        `
            },
            {
                title: '2. 우아한 테크캠프를 대신하여 진행되는 프로그램인가요?',
                category: 'etc-questions-container"',
                content:
                        `
                           아닙니다. 우아한테크코스는 <strong><b>우아한 테크캠프와는 다른 별개의 교육 프로그램</b></strong>입니다.
                        `
            },
            {
                title: '3. 우아한 테크캠프와 다른 점이 무엇인가요?',
                category: 'etc-questions-container"',
                content:
                        `
                            우아한 테크캠프는 인턴 과정으로 현장에서 필요로하는 역량을 두 달 동안 진행하는 교육 과정이라면
                            우아한테크코스는 최소한의 프로그래밍 지식과 역량을 가진 상태에서 <strong><b>현장에서 업무가 가능한 상태의 교육</b></strong>을 진행하는 교육 과정입니다.
                        `
            },
            {
                title: '4. 수료 후 우아한형제들에 입사할 기회가 있나요?',
                category: 'etc-questions-container"',
                content:
                        `
                            우아한테크코스를 수료한 교육생 중 일부를
                            신입사원으로 선발할 계획은 있습니다. 하지만 반드시 우형에 입사하지 않더라도 
                            우형에 준하는 회사에 입사할 기회는 많아질 것입니다.
                        `
            }
        ]

        const applyQuestionContainer = document.getElementById('apply-questions-container')
        const programQuestionContainer = document.getElementById('program-questions-container')
        const etcQuestionContainer = document.getElementById('etc-questions-container')

        applyQuestions.map((question, index) => applyQuestionContainer.insertAdjacentHTML('beforeend', questionTemplate(question, index)))
        programQuestions.map((question, index) => programQuestionContainer.insertAdjacentHTML('beforeend', questionTemplate(question, index)))
        etcQuestions.map((question, index) => etcQuestionContainer.insertAdjacentHTML('beforeend', questionTemplate(question, index)))
    }

    return {
        init: init,
    }
})()

FAQ_APP.init()
