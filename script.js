/* =========================================
   FINE AI LEARNING BITES
   INTERACTIVE PRESENTATION
========================================= */


/* -----------------------------------------
   SLIDES
----------------------------------------- */

const slides = Array.from(
    document.querySelectorAll(".slide")
);

let currentSlide = 0;


/* -----------------------------------------
   SESSION DATA
----------------------------------------- */

const sessions = [

    {
        month: "JANUARY",
        title: "AI in Excel",
        speaker: "Ala' Dalghan",
        image: "assets/ai-excel-january.jpg",
        description:
            "An introduction to using AI capabilities in Excel to work smarter, analyze information faster and gain useful insights."
    },

    {
        month: "JANUARY",
        title: "Introduction to Copilot",
        speaker: "Raghad Hemeimat — Microsoft",
        image: "assets/introduction-to-copilot-january.jpg",
        description:
            "An introduction to Microsoft Copilot and how employees can use AI to support everyday work."
    },

    {
        month: "MARCH",
        title: "Copilot in Excel",
        speaker: "Raghad Hemeimat — Microsoft",
        image: "assets/copilot-excel-march.png",
        description:
            "A practical look at using Copilot in Excel to analyze data, work with information and improve productivity."
    },

    {
        month: "APRIL",
        title: "AI in PowerPoint",
        speaker: "Ala' Dalghan",
        image: "assets/ai-powerpoint-april.png",
        description:
            "Exploring how AI can help create cleaner, sharper presentations and accelerate the presentation-building process."
    },

    {
        month: "MAY",
        title: "AI in Leadership",
        speaker: "Ala' Dalghan",
        image: "assets/ai-leadership.jpg",
        description:
            "Exploring how leaders can use AI strategically to make faster decisions, identify opportunities and lead with sharper insights."
    },

    {
        month: "MAY",
        title: "BRICKS AI",
        speaker: "Riverdale Institute",
        image: "assets/bricks-ai-may.jpg",
        description:
            "A Finance-focused Learning Bite exploring BRICKS AI and the use of AI for financial analysis."
    },

    {
        month: "JUNE",
        title: "AI in Legal & Compliance",
        speaker: "Dr. Ramy Al Damati",
        image: "assets/ai-legal-compliance-june.jpg",
        description:
            "Practical applications of AI for smarter legal and compliance operations."
    },

    {
        month: "JUNE",
        title: "AI Agent 1",
        speaker: "Raghad Hemeimat — Microsoft",
        image: "assets/introduction-to-copilot-january.jpg",
        description:
            "The first step into understanding AI Agents and how AI can move beyond simple questions and answers."
    },

    {
        month: "JUNE",
        title: "AI Agent 2",
        speaker: "Raghad Hemeimat — Microsoft",
        image: "assets/copilot-excel-march.png",
        description:
            "Building on the AI Agent concept and exploring how AI can support specific business tasks."
    },

    {
        month: "JULY",
        title: "AI Agent 3",
        speaker: "Raghad Hemeimat — Microsoft",
        image: "assets/copilot-excel-march.png",
        description:
            "Continuing the journey toward creating practical AI-powered solutions."
    }

];


/* -----------------------------------------
   UPDATE SLIDE
----------------------------------------- */

function showSlide(index) {

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }

    currentSlide = index;


    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    /* Counter */

    const counter =
        document.getElementById("counter");

    if (counter) {

        counter.textContent =
            String(currentSlide + 1)
                .padStart(2, "0");

    }


    /* Progress */

    const progress =
        document.getElementById("progress");

    if (progress) {

        const percentage =
            ((currentSlide + 1) /
            slides.length) * 100;

        progress.style.width =
            percentage + "%";

    }


    /* Rail */

    document
        .querySelectorAll(".rail-dot")
        .forEach((button, i) => {

            button.classList.toggle(
                "active",
                i === currentSlide
            );

        });


    /* Menu */

    document
        .querySelectorAll(".menu-list button")
        .forEach((button, i) => {

            button.classList.toggle(
                "active",
                i === currentSlide
            );

        });

}


/* -----------------------------------------
   NEXT / PREVIOUS
----------------------------------------- */

function nextSlide() {

    showSlide(currentSlide + 1);

}


function previousSlide() {

    showSlide(currentSlide - 1);

}


/* -----------------------------------------
   ARROW BUTTONS
----------------------------------------- */

const nextButton =
    document.getElementById("next");

const previousButton =
    document.getElementById("prev");


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


/* -----------------------------------------
   KEYBOARD NAVIGATION
----------------------------------------- */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowRight" ||
            event.key === " "
        ) {

            nextSlide();

        }


        if (event.key === "ArrowLeft") {

            previousSlide();

        }


        if (event.key === "Escape") {

            closeMenu();
            closeModal();

        }

    }
);


/* -----------------------------------------
   ENTER JOURNEY BUTTON
----------------------------------------- */

document
    .querySelectorAll("[data-next]")
    .forEach(button => {

        button.addEventListener(
            "click",
            nextSlide
        );

    });


/* -----------------------------------------
   SIDE NAVIGATION
----------------------------------------- */

document
    .querySelectorAll(".rail-dot")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const index =
                    Number(
                        this.dataset.slide
                    );

                showSlide(index);

            }
        );

    });


/* -----------------------------------------
   BUILD SESSION GRID
----------------------------------------- */

const sessionGrid =
    document.getElementById("sessionGrid");


if (sessionGrid) {

    sessions.forEach(
        (session, index) => {

            const card =
                document.createElement("button");

            card.className =
                "session-card";

            card.dataset.session =
                index;


            card.innerHTML = `

                <img
                    src="${session.image}"
                    alt="${session.title}"
                >

                <div class="session-body">

                    <small>
                        ${session.month}
                    </small>

                    <h3>
                        ${session.title}
                    </h3>

                    <p>
                        ${session.speaker}
                    </p>

                </div>

            `;


            card.addEventListener(
                "click",
                function() {

                    openModal(index);

                }
            );


            sessionGrid.appendChild(card);

        }
    );

}


/* -----------------------------------------
   FEATURE POSTER BUTTONS
----------------------------------------- */

document
    .querySelectorAll(".feature-poster")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const index =
                    Number(
                        this.dataset.session
                    );

                openModal(index);

            }
        );

    });


/* -----------------------------------------
   MODAL
----------------------------------------- */

const modal =
    document.getElementById("modal");

const modalImage =
    document.getElementById("modalImage");

const modalMonth =
    document.getElementById("modalMonth");

const modalTitle =
    document.getElementById("modalTitle");

const modalSpeaker =
    document.getElementById("modalSpeaker");

const modalCopy =
    document.getElementById("modalCopy");


function openModal(index) {

    const session =
        sessions[index];

    if (!session || !modal) {
        return;
    }


    modalImage.src =
        session.image;

    modalImage.alt =
        session.title;

    modalMonth.textContent =
        session.month;

    modalTitle.textContent =
        session.title;

    modalSpeaker.textContent =
        session.speaker;

    modalCopy.textContent =
        session.description;


    modal.classList.add("open");

}


function closeModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("open");

}


/* -----------------------------------------
   MODAL CLOSE
----------------------------------------- */

const modalClose =
    document.getElementById("modalClose");


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


/* Click outside modal */

if (modal) {

    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal ||
                event.target.classList.contains(
                    "modal-bg"
                )
            ) {

                closeModal();

            }

        }
    );

}


/* -----------------------------------------
   MENU
----------------------------------------- */

const menuOverlay =
    document.getElementById(
        "menuOverlay"
    );

const menuList =
    document.getElementById(
        "menuList"
    );

const overviewButton =
    document.getElementById(
        "overviewBtn"
    );

const menuClose =
    document.getElementById(
        "menuClose"
    );


const menuTitles = [

    "Welcome",

    "Why AI Matters",

    "Learning First",

    "Our AI Journey",

    "The Learning Bites",

    "Everyday Productivity",

    "Broader AI Applications",

    "AI Agents",

    "From Learning to Action",

    "Employee Success Story",

    "The HR Agent",

    "What's Next?"

];


function buildMenu() {

    if (!menuList) {
        return;
    }


    menuTitles.forEach(
        (title, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.innerHTML = `

                <b>
                    ${String(index + 1)
                        .padStart(2, "0")}
                </b>

                <span>
                    ${title}
                </span>

            `;


            button.addEventListener(
                "click",
                function() {

                    showSlide(index);

                    closeMenu();

                }
            );


            menuList.appendChild(
                button
            );

        }
    );

}


function openMenu() {

    if (!menuOverlay) {
        return;
    }

    menuOverlay.classList.add(
        "open"
    );

}


function closeMenu() {

    if (!menuOverlay) {
        return;
    }

    menuOverlay.classList.remove(
        "open"
    );

}


if (overviewButton) {

    overviewButton.addEventListener(
        "click",
        openMenu
    );

}


if (menuClose) {

    menuClose.addEventListener(
        "click",
        closeMenu
    );

}


if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                menuOverlay
            ) {

                closeMenu();

            }

        }
    );

}


/* -----------------------------------------
   INITIALIZE
----------------------------------------- */

buildMenu();

showSlide(0);
