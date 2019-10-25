const CURRICULUM_APP = (() => {
    'use strict';
    const curriculumItemTemplate = (item, index) => {

        let contents = ''

        item.contents.map(content => {
            contents += `<li>${content}</li>`
        })

        const level = index === 4 ? 'ALL' : `Lv. ${index + 1}`

        return `
                 <div class="setup_item row">
                    <div class="col-md-5 setup_img">
                        <img width="100%" src="${item.imgUrl}" alt="">
                    </div>
                    <div class="col-md-2 s_number">
                        <div class="round desktop-view font-size-24">${level}</div>
                    </div>
                    <div class="col-md-5">
                        <div class="setup_content">
                            <h4 class="mrg-top-30 desktop-view">${item.title}</h4>
                            <div class="mrg-top-30 mobile-view width-100 pdd-left-20">
                                <h4 class="text-left-sm">
                                    <span class="mobile-view font-size-20 hanna-air">레벨 ${index + 1} </span> <br/>
                                    ${item.title}
                                </h4>
                            </div>
                            <ul class="level-contents font-size-15 text-dark text-left-sm">
                                ${contents}
                            </ul>
                        </div>
                    </div>
                    <div class="line bottom_half height"></div>
                </div>
                    `
    }

    const init = () => {

        const curriculums = [
            {
                title: '프로그래밍 기본',
                imgUrl: 'images/pages/curriculum/level1.png',
                contents: [
                    '자바 프로그래밍 언어에 대한 기본 문법을 익혀 프로그래밍을 한다.',
                    '페어 프로그래밍과 TDD를 수행하여 피드백 주기를 줄이고 코드 리뷰를 통해 코드 품질을 높인다.',
                    '자신이 구현한 코드에 대해 단위 테스트를 작성하고 리팩토링하여 읽기 좋은 코드로 변경해본다.'
                ]
            },
            {
                title: '웹 프로그래밍과 미니 팀 프로젝트',
                imgUrl: 'images/pages/curriculum/level2.png',
                contents: [
                    'Spring 프레임워크 기반의 웹 애플리케이션을 TDD, ATDD로 개발하고 리팩토링한다.',
                    '구현한 프로그램을 서버에 배포하고 피드백을 받아 지속적으로 개선한다.',
                    '팀 프로젝트를 통해 팀원들과의 소통, 회고 등 협업을 경험한다.',
                    `  <a href="https://www.youtube.com/playlist?list=PLgXGHBqgT2TsWUA5puZimG3DDlJTd370Q" target="_blank" class="text-dark text-bold">
                            <i class="fa fa-youtube-play font-size-18 text-bold relative left-5 mrg-right-5"></i>
                            <span class="text-bold f_600 pdd-right-0">[미니프로젝트] 유튜브 채널</span>
                       </a>
                    `
                ]
            },
            {
                title: '웹 백엔드에 깊이를 더하는 단계',
                imgUrl: 'images/pages/curriculum/level3.png',
                contents: [
                    '웹 서버를 직접 구현해 HTTP를 이해하고, 서블릿 컨테이너의 동작 원리를 이해한다.',
                    '패킷을 직접 구현해 OSI 7 Layer 및 네트워크 통신 방식의 이해도를 높인다.',
                    'JDBC 라이브러리, MVC, DI 프레임워크 구현을 통해 Spring 프레임워크의 동작 원리를 이해한다.',
                    '대규모 서비스를 위한 시스템 아키텍처 설계 및 대용량 데이터를 처리한다.',
                    '레거시 코드를 점진적으로 리팩토링하고 애플리케이션 설계 역량을 높인다.'
                ]
            },
            {
                title: '팀 프로젝트',
                imgUrl: 'images/pages/curriculum/level4.png',
                contents: [
                    '개발 프로세스 기반으로 프로젝트 진행, 협업하는 경험을 한다.'
                ]
            },
            {
                title: '테코톡/글쓰기',
                imgUrl: 'images/pages/curriculum/techtalk_writing.png',
                contents: [
                    '현장에서 필요한 말하기, 글쓰기 능력을 향상시키기 위해 진행하는 우아한테크코스만의 문화',
                    `  <a href="https://www.youtube.com/playlist?list=PLgXGHBqgT2TvpJ_p9L_yZKPifgdBOzdVH" target="_blank"  class="text-dark text-bold">
                            <i class="fa fa-youtube-play font-size-18 text-bold relative left-5 mrg-right-5"></i>
                            <span class="text-bold f_600 pdd-right-0">[테코톡] 유튜브 채널</span>
                       </a>
                    `,
                    `
                        <a href="http://woowabros.github.io/techcourse/2019/06/28/techcourse-level1-retrospection.html" target="_blank"  class="text-dark text-bold">
                            <i class="ti-github text-dark font-size-17 relative left-5 mrg-right-5"></i>
                            <span class="text-bold f_600 pdd-right-0">[글쓰기] 항해의 시작</span>
                        </a>
                    `,
                    `
                       <a href="http://woowabros.github.io/techcourse/2019/09/04/techcourse-level2-retrospection.html" target="_blank"  class="text-dark text-bold">
                            <i class="ti-github text-dark font-size-17 relative left-5 mrg-right-5"></i>
                            <span class="text-bold f_600 pdd-right-0">[글쓰기] 나만의 항로 찾기</span>
                        </a>
                    `
                ]
            }

        ]

        const curriculumContainer = document.getElementById('curriculum-container')

        curriculums.map((curriculum, index) => curriculumContainer.insertAdjacentHTML('beforeend', curriculumItemTemplate(curriculum, index)))
    }

    return {
        init: init,
    }
})()

CURRICULUM_APP.init()
