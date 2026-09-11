/* =========================================================
   FINE HYGIENIC HOLDING
   AI LEARNING JOURNEY 2026
   INTERACTIVE PRESENTATION
========================================================= */


/* =========================================================
   1. PRESENTATION SETUP
========================================================= */

const slides = Array.from(
    document.querySelectorAll(".slide")
);

let currentSlide = 0;

const currentNumber =
    document.getElementById("currentNumber");

const totalNumber =
    document.getElementById("totalNumber");

const progressBar =
    document.getElementById("progressBar");

const slideName =
    document.getElementById("slideName");

const previousButton =
    document.getElementById("previousSlide");

const nextButton =
    document.getElementById("nextSlide");


if (totalNumber) {
    totalNumber.textContent =
        String(slides.length).padStart(2, "0");
}


/* =========================================================
   2. SESSION DATA
========================================================= */

const sessions = {

    "ai-excel": {
        month: "JANUARY",
        title: "AI in Excel",
        speaker: "Ala' Dalghan",
        poster: "assets/ai-excel-january.jpg",

        description:
            "One of the first Learning Bites in our AI journey, exploring how AI can support smarter work, faster analysis and better decision-making in Excel.",

        tags: [
            "Excel",
            "Productivity",
            "AI"
        ]
    },


    "copilot-intro": {
        month: "JANUARY",
        title: "Introduction to Copilot",
        speaker: "Raghad Hemeimat · Microsoft",
        poster: "assets/introduction-to-copilot-january.png",

        description:
            "An introduction to Microsoft Copilot and how AI can become part of everyday work through practical examples and demonstrations.",

        tags: [
            "Microsoft Copilot",
            "Everyday AI",
            "Productivity"
        ]
    },


    "copilot-excel": {
        month: "MARCH",
        title: "Copilot in Excel",
        speaker: "Raghad Hemeimat · Microsoft",
        poster: null,

        description:
            "A practical Learning Bite focused on using Copilot within Excel and exploring how AI can support everyday data-related work.",

        tags: [
            "Copilot",
            "Excel",
            "Microsoft"
        ]
    },


    "ai-powerpoint": {
        month: "APRIL",
        title: "AI in PowerPoint",
        speaker: "Ala' Dalghan",
        poster: "assets/ai-powerpoint-april.png",

        description:
            "Exploring how AI can support the creation of cleaner, sharper and more effective presentations in less time.",

        tags: [
            "PowerPoint",
            "Presentations",
            "Productivity"
        ]
    },


    "ai-leadership": {
        month: "MAY",
        title: "AI in Leadership",
        speaker: "Ala' Dalghan",
        poster: "assets/ai-leadership.jpg",

        description:
            "Exploring how leaders can use AI strategically to support faster decisions, identify opportunities and work with sharper insights.",

        tags: [
            "Leadership",
            "Decision-Making",
            "Strategy"
        ]
    },


    "bricks": {
        month: "MAY",
        title: "BRICKS AI",
        speaker: "Riverdale Institute",
        poster: "assets/bricks-ai-may.jpg",

        description:
            "A Finance Learning Bite exploring BRICKS AI and the possibilities of AI-supported financial analysis.",

        tags: [
            "Finance",
            "Financial Analysis",
            "BRICKS AI"
        ]
    },


    "legal": {
        month: "JUNE",
        title: "AI in Legal & Compliance",
        speaker: "Dr. Ramy Al Damati",
        poster: "assets/ai-legal-compliance-june.jpg",

        description:
            "Exploring practical AI applications that can support smarter legal and compliance operations.",

        tags: [
            "Legal",
            "Compliance",
            "Business AI"
        ]
    },


    "agent-one": {
        month: "JUNE",
        title: "AI Agent 1",
        speaker: "Raghad Hemeimat · Microsoft",
        poster: null,

        description:
            "The beginning of our AI Agent learning series — moving the conversation from simply using AI toward understanding how AI-powered agents can support specific tasks.",

        tags: [
            "AI Agents",
            "Microsoft",
            "Automation"
        ]
    },


    "agent-two": {
        month: "JUNE",
        title: "AI Agent 2",
        speaker: "Raghad Hemeimat · Microsoft",
        poster: null,

        description:
            "Building further on the AI Agent concept and exploring how agents can be designed around practical business needs.",

        tags: [
            "AI Agents",
            "Business Solutions",
            "Automation"
        ]
    },


    "agent-three": {
        month: "JULY",
        title: "AI Agent 3",
        speaker: "Raghad Hemeimat · Microsoft",
        poster: null,

        description:
            "Continuing the AI Agent journey and encouraging employees to think about how AI-powered solutions can be applied to real work challenges.",

        tags: [
            "AI Agents",
            "Innovation",
            "Building with AI"
        ]
    }

};


/* =========================================================
   3. SLIDE NAVIGATION
========================================================= */

function showSlide(index) {

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }


    slides.forEach(
        (slide, slideIndex) => {

            slide.classList.toggle(
                "active",
                slideIndex === index
            );

        }
    );


    currentSlide = index;


    /* Slide number */

    if (currentNumber) {

        currentNumber.textContent =
            String(index + 1).padStart(2, "0");

    }


    /* Progress bar */

    if (progressBar) {

        const progress =
            ((index + 1) / slides.length) * 100;

        progressBar.style.width =
            `${progress}%`;

    }


    /* Slide title */

    if (slideName) {

        slideName.textContent =
            slides[index].dataset.title ||
            `Slide ${index + 1}`;

    }


    /* Update overview menu */

    document
        .querySelectorAll(
            ".overview-list button"
        )
        .forEach(
            (button, buttonIndex) => {

                button.classList.toggle(
                    "active",
                    buttonIndex === index
                );

            }
        );


    /* Reset reveal animation */

    const reveals =
        slides[index]
            .querySelectorAll(".reveal");

    reveals.forEach(
        element => {

            element.style.animation = "none";

            void element.offsetHeight;

            element.style.animation = "";

        }
    );

}


function nextSlide() {

    showSlide(
        currentSlide + 1
    );

}


function previousSlide() {

    showSlide(
        currentSlide - 1
    );

}


/* Bottom arrows */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextSlide
    );

}


if (previousButton) {

    previousButton.addEventListener(
        "click",
        previousSlide
    );

}


/* Buttons with data-next */

document
    .querySelectorAll("[data-next]")
    .forEach(button => {

        button.addEventListener(
            "click",
            nextSlide
        );

    });


/* Buttons with data-go */

document
    .querySelectorAll("[data-go]")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const target =
                    Number(
                        button.dataset.go
                    );

                showSlide(target);

            }
        );

    });


/* =========================================================
   4. KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const activeElement =
            document.activeElement;

        const isTyping =
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA" ||
                activeElement.tagName === "SELECT"
            );


        if (isTyping) {

            if (event.key === "Escape") {

                activeElement.blur();

            }

            return;

        }


        if (
            event.key === "ArrowRight" ||
            event.key === "PageDown"
        ) {

            event.preventDefault();

            nextSlide();

        }


        if (
            event.key === "ArrowLeft" ||
            event.key === "PageUp"
        ) {

            event.preventDefault();

            previousSlide();

        }


        if (event.key === "Home") {

            showSlide(0);

        }


        if (event.key === "End") {

            showSlide(
                slides.length - 1
            );

        }


        if (event.key === "Escape") {

            closeOverview();

            closeSessionModal();

        }

    }
);


/* =========================================================
   5. TOUCH / SWIPE NAVIGATION
========================================================= */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0]
                .screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0]
                .screenX;

        handleSwipe();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const difference =
        touchStartX -
        touchEndX;


    if (
        Math.abs(difference) < 60
    ) {
        return;
    }


    if (difference > 0) {

        nextSlide();

    } else {

        previousSlide();

    }

}


/* =========================================================
   6. OVERVIEW MENU
========================================================= */

const overview =
    document.getElementById("overview");

const overviewList =
    document.getElementById(
        "overviewList"
    );

const menuButton =
    document.getElementById(
        "menuButton"
    );

const closeOverviewButton =
    document.getElementById(
        "closeOverview"
    );


function buildOverview() {

    if (!overviewList) {
        return;
    }


    overviewList.innerHTML = "";


    slides.forEach(
        (slide, index) => {

            const button =
                document.createElement(
                    "button"
                );


            const number =
                String(index + 1)
                    .padStart(2, "0");


            const title =
                slide.dataset.title ||
                `Slide ${index + 1}`;


            button.innerHTML = `
                <span>${number}</span>
                <strong>${title}</strong>
            `;


            button.addEventListener(
                "click",
                () => {

                    showSlide(index);

                    closeOverview();

                }
            );


            overviewList.appendChild(
                button
            );

        }
    );

}


function openOverview() {

    if (!overview) {
        return;
    }

    overview.classList.add("open");

}


function closeOverview() {

    if (!overview) {
        return;
    }

    overview.classList.remove("open");

}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        openOverview
    );

}


if (closeOverviewButton) {

    closeOverviewButton.addEventListener(
        "click",
        closeOverview
    );

}


if (overview) {

    const overviewBackground =
        overview.querySelector(
            ".overview-background"
        );


    if (overviewBackground) {

        overviewBackground.addEventListener(
            "click",
            closeOverview
        );

    }

}


/* =========================================================
   7. INTERACTIVE TIMELINE
========================================================= */

const timelineData = {

    JAN: {
        month: "JANUARY",
        title:
            "Starting the AI conversation",

        text:
            "The journey began with AI in Excel and an introduction to Microsoft Copilot — making AI practical and accessible in everyday work.",

        progress: "0%"
    },


    MAR: {
        month: "MARCH",
        title:
            "Bringing Copilot into Excel",

        text:
            "The journey continued with a dedicated Copilot in Excel session, exploring AI directly inside a familiar productivity tool.",

        progress: "20%"
    },


    APR: {
        month: "APRIL",
        title:
            "Creating with AI",

        text:
            "AI in PowerPoint introduced another practical use case: using AI to support faster and more effective presentation creation.",

        progress: "40%"
    },


    MAY: {
        month: "MAY",
        title:
            "Expanding into business applications",

        text:
            "The learning journey expanded beyond productivity into leadership and financial analysis through AI in Leadership and BRICKS AI.",

        progress: "60%"
    },


    JUN: {
        month: "JUNE",
        title:
            "From tools to AI Agents",

        text:
            "June brought AI into Legal & Compliance and introduced the first stages of the AI Agent learning series.",

        progress: "80%"
    },


    JUL: {
        month: "JULY",
        title:
            "Learning to build with AI",

        text:
            "By July, the learning journey had progressed toward building and experimenting with AI Agents around real business needs.",

        progress: "100%"
    }

};


const timelineStops =
    document.querySelectorAll(
        ".journey-stop"
    );

const timelineMonth =
    document.getElementById(
        "timelineMonth"
    );

const timelineTitle =
    document.getElementById(
        "timelineTitle"
    );

const timelineText =
    document.getElementById(
        "timelineText"
    );

const journeyProgress =
    document.querySelector(
        ".journey-progress"
    );


timelineStops.forEach(
    stop => {

        stop.addEventListener(
            "click",
            () => {

                const key =
                    stop.dataset.month;

                const data =
                    timelineData[key];


                if (!data) {
                    return;
                }


                timelineStops.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                stop.classList.add(
                    "active"
                );


                if (timelineMonth) {

                    timelineMonth.textContent =
                        data.month;

                }


                if (timelineTitle) {

                    timelineTitle.textContent =
                        data.title;

                }


                if (timelineText) {

                    timelineText.textContent =
                        data.text;

                }


                if (journeyProgress) {

                    journeyProgress.style.width =
                        data.progress;

                }

            }
        );

    }
);


/* =========================================================
   8. SESSION MODAL
========================================================= */

const sessionModal =
    document.getElementById(
        "sessionModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalPoster =
    document.getElementById(
        "modalPoster"
    );

const posterPlaceholder =
    document.getElementById(
        "posterPlaceholder"
    );

const modalMonth =
    document.getElementById(
        "modalMonth"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalSpeaker =
    document.getElementById(
        "modalSpeaker"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalTags =
    document.getElementById(
        "modalTags"
    );


function openSessionModal(
    sessionKey
) {

    const session =
        sessions[sessionKey];


    if (
        !session ||
        !sessionModal
    ) {
        return;
    }


    if (modalMonth) {

        modalMonth.textContent =
            session.month;

    }


    if (modalTitle) {

        modalTitle.textContent =
            session.title;

    }


    if (modalSpeaker) {

        modalSpeaker.textContent =
            session.speaker;

    }


    if (modalDescription) {

        modalDescription.textContent =
            session.description;

    }


    /* Poster */

    if (
        session.poster &&
        modalPoster
    ) {

        modalPoster.src =
            session.poster;

        modalPoster.alt =
            session.title;

        modalPoster.style.display =
            "block";


        if (posterPlaceholder) {

            posterPlaceholder.style.display =
                "none";

        }

    } else {

        if (modalPoster) {

            modalPoster.removeAttribute(
                "src"
            );

            modalPoster.style.display =
                "none";

        }


        if (posterPlaceholder) {

            posterPlaceholder.style.display =
                "flex";

        }

    }


    /* Tags */

    if (modalTags) {

        modalTags.innerHTML = "";


        session.tags.forEach(
            tag => {

                const tagElement =
                    document.createElement(
                        "span"
                    );

                tagElement.textContent =
                    tag;

                modalTags.appendChild(
                    tagElement
                );

            }
        );

    }


    sessionModal.classList.add(
        "open"
    );

}


function closeSessionModal() {

    if (!sessionModal) {
        return;
    }

    sessionModal.classList.remove(
        "open"
    );

}


document
    .querySelectorAll(
        "[data-session]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openSessionModal(
                    button.dataset.session
                );

            }
        );

    });


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeSessionModal
    );

}


document
    .querySelectorAll(
        "[data-close-modal]"
    )
    .forEach(element => {

        element.addEventListener(
            "click",
            closeSessionModal
        );

    });


/* =========================================================
   9. HR AGENT INTERACTIVE DEMO
========================================================= */

const employeeNumber =
    document.getElementById(
        "employeeNumber"
    );

const letterParty =
    document.getElementById(
        "letterParty"
    );

const agentPrompt =
    document.getElementById(
        "agentPrompt"
    );

const generateLetter =
    document.getElementById(
        "generateLetter"
    );

const demoChat =
    document.getElementById(
        "demoChat"
    );


function addUserMessage(
    message
) {

    if (!demoChat) {
        return;
    }


    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.className =
        "user-message";


    const paragraph =
        document.createElement(
            "p"
        );

    paragraph.textContent =
        message;


    wrapper.appendChild(
        paragraph
    );


    demoChat.appendChild(
        wrapper
    );

}


function addAgentMessage(
    message
) {

    if (!demoChat) {
        return;
    }


    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.className =
        "agent-message";


    wrapper.innerHTML = `
        <div class="message-avatar">
            AI
        </div>

        <div>
            <strong>HR Agent</strong>

            <p></p>
        </div>
    `;


    const paragraph =
        wrapper.querySelector("p");

    paragraph.textContent =
        message;


    demoChat.appendChild(
        wrapper
    );

}


function generateDemoLetter() {

    const employee =
        employeeNumber
            ? employeeNumber.value.trim()
            : "";

    const party =
        letterParty
            ? letterParty.value
            : "Bank";

    const prompt =
        agentPrompt
            ? agentPrompt.value.trim()
            : "";


    if (!employee) {

        if (employeeNumber) {

            employeeNumber.focus();

        }

        return;

    }


    const requestText =
        prompt ||
        `Prepare an official letter for ${party}.`;


    addUserMessage(
        `Employee ${employee}: ${requestText}`
    );


    if (generateLetter) {

        generateLetter.disabled =
            true;

        generateLetter.innerHTML = `
            <span>Generating...</span>
            <b>✦</b>
        `;

    }


    setTimeout(
        () => {

            addAgentMessage(
                `Demo complete. An official ${party.toLowerCase()} letter for employee ${employee} has been prepared and is ready for review.`
            );


            if (generateLetter) {

                generateLetter.disabled =
                    false;

                generateLetter.innerHTML = `
                    <span>Generate Letter</span>
                    <b>✦</b>
                `;

            }


            demoChat.scrollTo({
                top:
                    demoChat.scrollHeight,

                behavior:
                    "smooth"
            });

        },
        900
    );

}


if (generateLetter) {

    generateLetter.addEventListener(
        "click",
        generateDemoLetter
    );

}


if (agentPrompt) {

    agentPrompt.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                generateDemoLetter();

            }

        }
    );

}


/* =========================================================
   10. INITIALIZE
========================================================= */

buildOverview();

showSlide(0);
