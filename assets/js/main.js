/*==================================================
  SKILL CHECK 010
  IMAGE / FIT / RATIO

  HTML image element
  Object-fit / Object-position
  Aspect ratios / Responsive images
==================================================*/

/*=============== CONFIGURATION ===============*/

const TEST_ID = "010";
const TEST_TITLE = "Image / Fit / Ratio";

const STORAGE_KEY = "freetimezp:roadmap:skill-check-results:v1";

const TOTAL_QUESTIONS = 20;

/*=============== DOM HELPERS ===============*/

const $ = (selector, root = document) => root.querySelector(selector);

const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/*=============== DOM ELEMENTS ===============*/

const intro = $("#intro");
const quiz = $("#quiz");
const result = $("#result");

const startButton = $("#start");
const exitButton = $("#exit");
const nextButton = $("#next");
const retryButton = $("#retry");
const reviewButton = $("#reviewBtn");

const numberElement = $("#number");
const progressBar = $("#bar");
const kindElement = $("#kind");
const answeredElement = $("#answered");

const questionElement = $("#question");
const sampleElement = $("#sample");
const hintElement = $("#hint");
const optionsElement = $("#options");

const feedbackElement = $("#feedback");
const feedbackIcon = $("#feedbackIcon");
const feedbackTitle = $("#feedbackTitle");
const feedbackSubtitle = $("#feedbackSubtitle");
const feedbackExplanation = $("#feedbackExplanation");
const feedbackCode = $("#feedbackCode");
const feedbackTip = $("#feedbackTip");

const percentElement = $("#percent");
const resultTitle = $("#resultTitle");
const messageElement = $("#message");
const correctElement = $("#correct");
const timeElement = $("#time");
const bestElement = $("#best");
const ringElement = $("#ring");

const reviewContainer = $("#review");

/*=============== QUESTION BANK ===============*/

/*
  Each question contains:
  id          - Unique question identifier
  type        - single or multiple
  question    - Question text
  code        - Optional HTML/CSS snippet
  hint        - Helpful instruction
  options     - Possible answers
  correct     - Array of correct option IDs
  explanation - Why the answer is correct
  example     - Practical code example
  tip         - Deeper learning information
*/

const questionBank = [
    /*========================================
      01. HTML IMAGE ELEMENT
    ========================================*/

    {
        id: 1,
        type: "single",

        question:
            "Which HTML element is used to display an image on a webpage?",

        code: `<!-- Which element displays this image? -->`,

        hint: "Think about the semantic HTML element specifically designed for images.",

        options: [
            { id: "a", text: "<image>" },
            { id: "b", text: "<img>" },
            { id: "c", text: "<picture-image>" },
            { id: "d", text: "<src>" },
        ],

        correct: ["b"],

        explanation:
            "The <img> element embeds an image into an HTML document. It is a void element, meaning it does not need a closing tag.",

        example: `<img
    src="photo.jpg"
    alt="A mountain landscape"
>`,

        tip: "Unlike elements such as <div> or <p>, the <img> element cannot contain child elements. Its image source is provided through the src attribute.",
    },

    /*========================================
      02. IMAGE SOURCE
    ========================================*/

    {
        id: 2,
        type: "single",

        question: "Which attribute specifies the image file location?",

        code: `<img
    ______="images/forest.jpg"
    alt="Forest"
>`,

        hint: "This attribute tells the browser where to find the image.",

        options: [
            { id: "a", text: "href" },
            { id: "b", text: "link" },
            { id: "c", text: "src" },
            { id: "d", text: "source" },
        ],

        correct: ["c"],

        explanation:
            "The src attribute provides the URL or file path of the image. The browser uses it to retrieve the image resource.",

        example: `<img
    src="./assets/images/forest.jpg"
    alt="Forest landscape"
>`,

        tip: "Relative paths are resolved from the document URL. Check your folder structure carefully when an image fails to load.",
    },

    /*========================================
      03. ALT ATTRIBUTE
    ========================================*/

    {
        id: 3,
        type: "single",

        question: "What is the main purpose of the alt attribute?",

        code: `<img
    src="dog.jpg"
    alt="A golden retriever running on grass"
>`,

        hint: "Think about accessibility and what happens when an image cannot be displayed.",

        options: [
            { id: "a", text: "To change the image dimensions" },
            {
                id: "b",
                text: "To provide alternative text describing the image",
            },
            { id: "c", text: "To load the image faster" },
            { id: "d", text: "To position the image" },
        ],

        correct: ["b"],

        explanation:
            "Alternative text communicates the meaning or relevant information of an image to people using screen readers and can be displayed when an image fails to load.",

        example: `<img
    src="dog.jpg"
    alt="Golden retriever running through grass"
>`,

        tip: 'Describe the image in its context, not just its appearance. For a decorative image, use alt="" so assistive technology can ignore it.',
    },

    /*========================================
      04. DECORATIVE IMAGE
    ========================================*/

    {
        id: 4,
        type: "single",

        question:
            "An image is purely decorative and adds no information. What is the recommended alt value?",

        code: `<img
    src="decoration.svg"
    alt="?"
>`,

        hint: "A screen reader should not announce unnecessary decorative content.",

        options: [
            { id: "a", text: 'alt="decoration"' },
            { id: "b", text: 'alt="none"' },
            { id: "c", text: 'alt=""' },
            { id: "d", text: "Remove src instead" },
        ],

        correct: ["c"],

        explanation:
            "An empty alt attribute tells assistive technologies that the image is decorative and should generally be skipped.",

        example: `<img
    src="decorative-shape.svg"
    alt=""
>`,

        tip: "An omitted alt attribute is not the same as an empty alt attribute. Missing alt text can cause screen readers to announce the filename instead.",
    },

    /*========================================
      05. IMAGE DIMENSIONS
    ========================================*/

    {
        id: 5,
        type: "multiple",

        question:
            "Which statements about the width and height attributes of an HTML image are correct?",

        code: `<img
    src="photo.jpg"
    width="800"
    height="600"
    alt="Mountain"
>`,

        hint: "Select all correct statements.",

        options: [
            {
                id: "a",
                text: "They provide the image's intended dimensions.",
            },
            {
                id: "b",
                text: "They can help the browser reserve layout space.",
            },
            {
                id: "c",
                text: "They always crop the image.",
            },
            {
                id: "d",
                text: "They can help reduce layout shifts.",
            },
        ],

        correct: ["a", "b", "d"],

        explanation:
            "The width and height attributes provide intrinsic dimension information. Browsers can use the aspect ratio to reserve space before the image finishes loading, reducing unexpected layout shifts.",

        example: `<img
    src="photo.jpg"
    width="800"
    height="600"
    alt="Mountain landscape"
>`,

        tip: "These attributes do not mean the browser must display the image at exactly those dimensions. CSS can still make the image responsive.",
    },

    /*========================================
      06. OBJECT-FIT COVER
    ========================================*/

    {
        id: 6,
        type: "single",

        question:
            "Which object-fit value fills the entire container while preserving the image proportions, cropping excess parts if necessary?",

        code: `.photo {
    width: 300px;
    height: 200px;
    object-fit: ______;
}`,

        hint: "This is commonly used for image cards and portfolio thumbnails.",

        options: [
            { id: "a", text: "contain" },
            { id: "b", text: "fill" },
            { id: "c", text: "cover" },
            { id: "d", text: "none" },
        ],

        correct: ["c"],

        explanation:
            "object-fit: cover scales the image until the entire container is covered. It preserves proportions, but some image content may be cropped.",

        example: `.photo {
    width: 300px;
    height: 200px;
    object-fit: cover;
}`,

        tip: "Cover is ideal when every card needs consistent dimensions, such as product thumbnails, editorial galleries and profile cards.",
    },

    /*========================================
      07. OBJECT-FIT CONTAIN
    ========================================*/

    {
        id: 7,
        type: "single",

        question:
            "You need to show the entire image without cropping, even if empty space remains inside the container. Which value should you use?",

        code: `.product-image {
    width: 300px;
    height: 200px;
    object-fit: ______;
}`,

        hint: "Think about product images where every part of the object must remain visible.",

        options: [
            { id: "a", text: "cover" },
            { id: "b", text: "contain" },
            { id: "c", text: "fill" },
            { id: "d", text: "scale" },
        ],

        correct: ["b"],

        explanation:
            "contain scales the image to fit completely inside the container while preserving its aspect ratio. Empty space may appear along one axis.",

        example: `.product-image {
    width: 300px;
    height: 200px;
    object-fit: contain;
    background: #f0f0f0;
}`,

        tip: "Contain is useful for logos, product cutouts and illustrations where cropping important content would be undesirable.",
    },

    /*========================================
      08. OBJECT-FIT FILL
    ========================================*/

    {
        id: 8,
        type: "single",

        question: "What happens when object-fit is set to fill?",

        code: `.photo {
    width: 300px;
    height: 200px;
    object-fit: fill;
}`,

        hint: "Unlike cover and contain, this value does not preserve the original proportions.",

        options: [
            { id: "a", text: "The image is cropped" },
            { id: "b", text: "The image keeps its original size" },
            { id: "c", text: "The image stretches to fill the content box" },
            { id: "d", text: "The image becomes transparent" },
        ],

        correct: ["c"],

        explanation:
            "fill stretches or compresses the image independently along each axis to fill the content box. This can distort its original proportions.",

        example: `.photo {
    width: 300px;
    height: 200px;
    object-fit: fill;
}`,

        tip: "Use fill only when distortion is acceptable. For photographs, cover or contain is usually a better visual choice.",
    },

    /*========================================
      09. OBJECT-FIT VALUES
    ========================================*/

    {
        id: 9,
        type: "multiple",

        question: "Which of these are valid object-fit values?",

        code: `.photo {
    object-fit: cover;
}`,

        hint: "Select all valid CSS values for the object-fit property.",

        options: [
            { id: "a", text: "cover" },
            { id: "b", text: "contain" },
            { id: "c", text: "fill" },
            { id: "d", text: "stretch" },
            { id: "e", text: "scale-down" },
            { id: "f", text: "none" },
        ],

        correct: ["a", "b", "c", "e", "f"],

        explanation:
            "The five standard object-fit values are fill, contain, cover, none and scale-down. Stretch is not a valid object-fit value.",

        example: `.photo-cover {
    object-fit: cover;
}

.photo-contain {
    object-fit: contain;
}

.photo-original {
    object-fit: none;
}`,

        tip: "scale-down chooses the smaller concrete result between none and contain. It will not enlarge the image beyond its natural size.",
    },

    /*========================================
      10. OBJECT-POSITION
    ========================================*/

    {
        id: 10,
        type: "single",

        question:
            "Which CSS property controls the alignment of an image inside its box when object-fit is used?",

        code: `.photo {
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: ______;
}`,

        hint: "Imagine moving the visible crop toward the top of a portrait.",

        options: [
            { id: "a", text: "background-position" },
            { id: "b", text: "object-position" },
            { id: "c", text: "image-align" },
            { id: "d", text: "position-image" },
        ],

        correct: ["b"],

        explanation:
            "object-position controls the alignment of replaced content such as an image inside its content box.",

        example: `.photo {
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: center top;
}`,

        tip: "Use object-position: 50% 20% or object-position: center 20% to move the visible image area toward a subject near the top.",
    },

    /*========================================
      11. ASPECT RATIO
    ========================================*/

    {
        id: 11,
        type: "single",

        question: "What does an aspect ratio of 16:9 describe?",

        code: `video {
    aspect-ratio: 16 / 9;
}`,

        hint: "Think about the relationship between width and height.",

        options: [
            { id: "a", text: "16 pixels wide and 9 pixels tall" },
            { id: "b", text: "Width is 16 units for every 9 height units" },
            { id: "c", text: "The image is always 16px high" },
            { id: "d", text: "The image must be cropped" },
        ],

        correct: ["b"],

        explanation:
            "16:9 is a proportional relationship between width and height. It does not prescribe a fixed pixel size.",

        example: `.video-frame {
    width: 100%;
    aspect-ratio: 16 / 9;
}`,

        tip: "A 1600 × 900 image and a 320 × 180 image both have a 16:9 aspect ratio, despite having very different dimensions.",
    },

    /*========================================
      12. CSS ASPECT-RATIO
    ========================================*/

    {
        id: 12,
        type: "single",

        question: "What does the CSS aspect-ratio property do?",

        code: `.card-image {
    width: 100%;
    aspect-ratio: 1 / 1;
}`,

        hint: "Think about maintaining a consistent shape when the container width changes.",

        options: [
            { id: "a", text: "Sets the image file format" },
            { id: "b", text: "Defines a preferred width-to-height ratio" },
            { id: "c", text: "Changes image quality" },
            { id: "d", text: "Automatically adds object-fit: cover" },
        ],

        correct: ["b"],

        explanation:
            "aspect-ratio establishes a preferred ratio between an element's width and height. The browser uses it when calculating automatic sizing.",

        example: `.card-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}`,

        tip: "aspect-ratio and object-fit solve different problems: aspect-ratio controls the element's shape, while object-fit controls how the image content fits inside it.",
    },

    /*========================================
      13. RESPONSIVE IMAGE
    ========================================*/

    {
        id: 13,
        type: "single",

        question:
            "Which CSS rule is commonly used to prevent an image from overflowing its parent container?",

        code: `img {
    max-width: ______;
    height: auto;
}`,

        hint: "The image should shrink when its container becomes narrower, but not grow beyond its intrinsic width.",

        options: [
            { id: "a", text: "100px" },
            { id: "b", text: "100%" },
            { id: "c", text: "none" },
            { id: "d", text: "auto" },
        ],

        correct: ["b"],

        explanation:
            "max-width: 100% limits the image width to its containing block. height: auto preserves its intrinsic aspect ratio.",

        example: `img {
    display: block;
    max-width: 100%;
    height: auto;
}`,

        tip: "This is a common responsive image baseline. It allows images to scale down on small screens without stretching them.",
    },

    /*========================================
      14. LAZY LOADING
    ========================================*/

    {
        id: 14,
        type: "single",

        question: 'What is the purpose of loading="lazy" on an image?',

        code: `<img
    src="gallery-photo.jpg"
    alt="Gallery"
    loading="lazy"
>`,

        hint: "Think about images located far below the visible part of the page.",

        options: [
            { id: "a", text: "It compresses the image file" },
            {
                id: "b",
                text: "It delays loading until the image is near the viewport",
            },
            { id: "c", text: "It makes the image smaller" },
            { id: "d", text: "It disables image caching" },
        ],

        correct: ["b"],

        explanation:
            "Native lazy loading allows the browser to defer loading off-screen images until they are near the viewport.",

        example: `<img
    src="gallery-photo.jpg"
    alt="Mountain gallery"
    loading="lazy"
>`,

        tip: "Avoid lazy-loading the main above-the-fold hero image when it is an important Largest Contentful Paint element. Loading behavior should match the image's position and importance.",
    },

    /*========================================
      15. SRCSET
    ========================================*/

    {
        id: 15,
        type: "single",

        question: "What is the purpose of the srcset attribute?",

        code: `<img
    src="photo-800.jpg"
    srcset="
        photo-400.jpg 400w,
        photo-800.jpg 800w,
        photo-1200.jpg 1200w
    "
    sizes="100vw"
    alt="Landscape"
>`,

        hint: "Think about offering the browser multiple image resource choices.",

        options: [
            { id: "a", text: "To create a CSS image grid" },
            { id: "b", text: "To provide alternative image candidates" },
            { id: "c", text: "To change the image's aspect ratio" },
            { id: "d", text: "To add a caption" },
        ],

        correct: ["b"],

        explanation:
            "srcset provides multiple image candidates. The browser can choose an appropriate resource based on the available information and device conditions.",

        example: `<img
    src="photo-800.jpg"
    srcset="
        photo-400.jpg 400w,
        photo-800.jpg 800w,
        photo-1200.jpg 1200w
    "
    sizes="100vw"
    alt="Mountain landscape"
>`,

        tip: "When using width descriptors such as 400w and 800w, the sizes attribute helps the browser estimate the rendered image width.",
    },

    /*========================================
      16. PICTURE ELEMENT
    ========================================*/

    {
        id: 16,
        type: "single",

        question:
            "Which HTML element is useful for art direction, such as showing a different crop on mobile screens?",

        code: `<____>
    <source
        media="(max-width: 600px)"
        srcset="portrait.jpg"
    >

    <img src="landscape.jpg" alt="Mountain">
</____>`,

        hint: "This element can contain source elements and a fallback img element.",

        options: [
            { id: "a", text: "<gallery>" },
            { id: "b", text: "<picture>" },
            { id: "c", text: "<responsive>" },
            { id: "d", text: "<figure>" },
        ],

        correct: ["b"],

        explanation:
            "The picture element allows developers to define multiple image sources with media conditions or different formats. The nested img element provides the image and its alternative text.",

        example: `<picture>
    <source
        media="(max-width: 600px)"
        srcset="portrait.jpg"
    >

    <img
        src="landscape.jpg"
        alt="Mountain landscape"
    >
</picture>`,

        tip: "Use picture for art direction or format selection. Use srcset and sizes on img for resolution switching when the image content remains the same.",
    },

    /*========================================
      17. FIGURE AND FIGCAPTION
    ========================================*/

    {
        id: 17,
        type: "single",

        question:
            "Which element is designed to provide a caption for an image inside a figure?",

        code: `<figure>
    <img src="mountain.jpg" alt="Mountain">
    <________>Sunrise in the Alps</________>
</figure>`,

        hint: "It is a semantic caption element that can be associated with figure content.",

        options: [
            { id: "a", text: "<caption>" },
            { id: "b", text: "<figcaption>" },
            { id: "c", text: "<label>" },
            { id: "d", text: "<description>" },
        ],

        correct: ["b"],

        explanation:
            "figcaption represents a caption or legend for its parent figure element.",

        example: `<figure>
    <img
        src="mountain.jpg"
        alt="Mountain peaks at sunrise"
    >

    <figcaption>
        Sunrise in the Alps
    </figcaption>
</figure>`,

        tip: "A figure can contain an image, illustration, code example or other self-contained content. The figcaption is optional.",
    },

    /*========================================
      18. OBJECT-FIT VS ASPECT-RATIO
    ========================================*/

    {
        id: 18,
        type: "multiple",

        question:
            "Which statements correctly describe the difference between object-fit and aspect-ratio?",

        code: `.photo {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
}`,

        hint: "Select all correct statements.",

        options: [
            {
                id: "a",
                text: "aspect-ratio controls the preferred shape of the element.",
            },
            {
                id: "b",
                text: "object-fit controls how replaced content fits inside its box.",
            },
            {
                id: "c",
                text: "They always do exactly the same thing.",
            },
            {
                id: "d",
                text: "They can be used together.",
            },
        ],

        correct: ["a", "b", "d"],

        explanation:
            "aspect-ratio establishes the preferred dimensions relationship of the box. object-fit determines how the replaced content, such as an image, is rendered inside that box.",

        example: `.photo {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
}`,

        tip: "A reliable gallery pattern is to define a consistent aspect ratio for every image box and use object-fit: cover for consistent cropping.",
    },

    /*========================================
      19. IMAGE LAYOUT SHIFT
    ========================================*/

    {
        id: 19,
        type: "single",

        question:
            "A page jumps vertically when large images finish loading. Which practice helps prevent this layout shift?",

        code: `<img
    src="large-photo.jpg"
    alt="Landscape"
    ______="1200"
    ______="800"
>`,

        hint: "Give the browser dimension information before the image finishes downloading.",

        options: [
            { id: "a", text: "Use width and height attributes" },
            { id: "b", text: "Remove the alt attribute" },
            { id: "c", text: "Set object-fit: none" },
            { id: "d", text: "Use display: inline" },
        ],

        correct: ["a"],

        explanation:
            "Providing image dimensions allows the browser to reserve an appropriate amount of space before the resource is loaded, helping reduce layout shifts.",

        example: `<img
    src="large-photo.jpg"
    width="1200"
    height="800"
    alt="Mountain landscape"
>`,

        tip: "The CSS aspect-ratio property can also establish a reserved shape. Correct dimensions and responsive sizing work together to improve visual stability.",
    },

    /*========================================
      20. COMPLETE IMAGE IMPLEMENTATION
    ========================================*/

    {
        id: 20,
        type: "multiple",

        question:
            "You are building a responsive image card. Which practices are good choices for a typical content image?",

        code: `<img
    src="nature.jpg"
    alt="Forest landscape"
    width="1200"
    height="800"
    loading="lazy"
    class="card-image"
>`,

        hint: "Think about accessibility, responsive behavior, layout stability and visual consistency.",

        options: [
            {
                id: "a",
                text: "Provide meaningful alternative text.",
            },
            {
                id: "b",
                text: "Use width and height attributes.",
            },
            {
                id: "c",
                text: "Use max-width: 100% and height: auto as a responsive baseline.",
            },
            {
                id: "d",
                text: "Use object-fit: cover when a consistent cropped card is required.",
            },
            {
                id: "e",
                text: "Always remove the image dimensions.",
            },
        ],

        correct: ["a", "b", "c", "d"],

        explanation:
            "A good image implementation combines meaningful alternative text, dimension information, responsive CSS and an appropriate object-fit strategy when cropping is required.",

        example: `<img
    src="nature.jpg"
    alt="Sunlight filtering through a forest"
    width="1200"
    height="800"
    loading="lazy"
    class="card-image"
>`,

        tip: "There is no single image recipe for every situation. Choose alt text based on context, lazy loading based on visibility, and object-fit based on the visual purpose.",
    },
];

/*=============== QUIZ STATE ===============*/

let questions = [];

let currentIndex = 0;

let selectedAnswers = new Set();

let userAnswers = [];

let questionChecked = false;

let correctCount = 0;

let startTime = 0;

let elapsedTime = 0;

let timerInterval = null;

let completed = false;

/*=============== RANDOMIZATION ===============*/

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

/*=============== STORAGE ===============*/

/*
  Preserve the same shared roadmap structure
  used by Skill Checks 001–009.

  {
      schemaVersion: 1,
      updatedAt: "...",
      tests: {
          "010": {
              testId: "010",
              title: "Image / Fit / Ratio",
              attempts: 1,
              latest: {},
              best: {},
              history: []
          }
      }
  }
*/

function readStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return {
                schemaVersion: 1,
                updatedAt: null,
                tests: {},
            };
        }

        const data = JSON.parse(saved);

        if (
            !data ||
            typeof data !== "object" ||
            !data.tests ||
            typeof data.tests !== "object"
        ) {
            throw new Error("Invalid roadmap data");
        }

        return data;
    } catch (error) {
        console.warn("Could not read skill check storage:", error);

        return {
            schemaVersion: 1,
            updatedAt: null,
            tests: {},
        };
    }
}

function saveStorage(scoreData) {
    try {
        const data = readStorage();

        const previous = data.tests[TEST_ID] || {};

        const previousBest = previous.best || null;

        const isNewBest =
            !previousBest ||
            scoreData.percentage > previousBest.percentage ||
            (scoreData.percentage === previousBest.percentage &&
                scoreData.score > previousBest.score);

        const history = [...(previous.history || []), scoreData].slice(-20);

        data.schemaVersion = 1;
        data.updatedAt = scoreData.completedAt;

        data.tests[TEST_ID] = {
            testId: TEST_ID,
            title: TEST_TITLE,

            attempts: (previous.attempts || 0) + 1,

            latest: scoreData,

            best: isNewBest ? scoreData : previousBest,

            history,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return data.tests[TEST_ID];
    } catch (error) {
        console.warn("Could not save skill check result:", error);

        return null;
    }
}

/*=============== TIME FORMAT ===============*/

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updateTimer() {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);

    timeElement.textContent = formatTime(elapsedTime);
}

/*=============== START QUIZ ===============*/

function startQuiz() {
    questions = shuffle(questionBank)
        .slice(0, TOTAL_QUESTIONS)
        .map((question) => ({
            ...question,
            options: shuffle(question.options),
        }));

    currentIndex = 0;

    selectedAnswers = new Set();

    userAnswers = [];

    correctCount = 0;

    completed = false;

    questionChecked = false;

    elapsedTime = 0;

    startTime = Date.now();

    clearInterval(timerInterval);

    timerInterval = setInterval(updateTimer, 1000);

    intro.classList.add("hidden");

    result.classList.add("hidden");

    quiz.classList.remove("hidden");

    reviewContainer.classList.add("hidden");

    reviewContainer.innerHTML = "";

    reviewButton.textContent = "Review answers ↓";

    renderQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

/*=============== RENDER QUESTION ===============*/

function renderQuestion() {
    const question = questions[currentIndex];

    if (!question) return;

    selectedAnswers = new Set();

    questionChecked = false;

    feedbackElement.classList.add("hidden");

    nextButton.disabled = true;

    nextButton.textContent = "Next question →";

    numberElement.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${TOTAL_QUESTIONS}`;

    progressBar.style.width = `${(currentIndex / TOTAL_QUESTIONS) * 100}%`;

    answeredElement.textContent = `${userAnswers.length} ANSWERED`;

    kindElement.textContent =
        question.type === "multiple"
            ? "MULTIPLE CHOICE · SELECT ALL"
            : "SINGLE CHOICE";

    /* Question */

    questionElement.textContent = question.question;

    /* Code sample */

    if (question.code) {
        sampleElement.textContent = question.code;

        sampleElement.classList.remove("hidden");
    } else {
        sampleElement.textContent = "";

        sampleElement.classList.add("hidden");
    }

    /* Hint */

    hintElement.textContent = question.hint || "";

    /* Options */

    renderOptions(question);

    /* Accessibility */

    optionsElement.setAttribute("aria-label", "Answer choices");
}

/*=============== RENDER OPTIONS ===============*/

function renderOptions(question) {
    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";

        button.className = "option";

        button.dataset.option = option.id;

        button.setAttribute("aria-pressed", "false");

        button.innerHTML = `
            <span class="option-marker">
                ${String.fromCharCode(65 + index)}
            </span>

            <span class="option-text"></span>
        `;

        $(".option-text", button).textContent = option.text;

        button.addEventListener("click", () => {
            selectOption(option.id);
        });

        optionsElement.appendChild(button);
    });
}

/*=============== SELECT OPTION ===============*/

function selectOption(optionId) {
    if (questionChecked) return;

    const question = questions[currentIndex];

    const button = $(`[data-option="${optionId}"]`, optionsElement);

    if (!button) return;

    /* Single choice */

    if (question.type === "single") {
        selectedAnswers.clear();

        selectedAnswers.add(optionId);

        checkAnswer();

        return;
    }

    /* Multiple choice */

    if (selectedAnswers.has(optionId)) {
        selectedAnswers.delete(optionId);
    } else {
        selectedAnswers.add(optionId);
    }

    /* Update selected appearance */

    button.classList.toggle("selected", selectedAnswers.has(optionId));

    button.setAttribute("aria-pressed", String(selectedAnswers.has(optionId)));

    nextButton.disabled = selectedAnswers.size === 0;

    nextButton.textContent = "Check answers ✓";
}

/*=============== CHECK ANSWER ===============*/

function checkAnswer() {
    if (questionChecked) return;

    if (selectedAnswers.size === 0) return;

    const question = questions[currentIndex];

    const selected = [...selectedAnswers].sort();

    const correct = [...question.correct].sort();

    /* Exact match required for multiple choice */

    const isCorrect =
        selected.length === correct.length &&
        selected.every((id, index) => id === correct[index]);

    questionChecked = true;

    if (isCorrect) {
        correctCount++;
    }

    /* Save user answer */

    const answerRecord = {
        questionId: question.id,
        type: question.type,
        question: question.question,

        selected: [...selectedAnswers],

        correct: [...question.correct],

        isCorrect,

        explanation: question.explanation,

        example: question.example,

        tip: question.tip,

        options: question.options,
    };

    userAnswers[currentIndex] = answerRecord;

    /* Update option states */

    const optionButtons = $$(".option", optionsElement);

    optionButtons.forEach((button) => {
        const id = button.dataset.option;

        const isSelected = selectedAnswers.has(id);

        const isCorrectOption = question.correct.includes(id);

        button.disabled = true;

        button.classList.remove("selected");

        if (isCorrectOption) {
            button.classList.add("correct");
        } else if (isSelected) {
            button.classList.add("incorrect");
        }
    });

    /* Show educational feedback */

    showFeedback(question, isCorrect);

    /* Enable next */

    nextButton.disabled = false;

    nextButton.textContent =
        currentIndex === TOTAL_QUESTIONS - 1 ? "View results →" : "Continue →";

    answeredElement.textContent = `${userAnswers.filter(Boolean).length} ANSWERED`;

    progressBar.style.width = `${((currentIndex + 1) / TOTAL_QUESTIONS) * 100}%`;
}

/*=============== EDUCATIONAL FEEDBACK ===============*/

function showFeedback(question, isCorrect) {
    feedbackElement.classList.remove("hidden");

    feedbackIcon.textContent = isCorrect ? "✓" : "✕";

    feedbackTitle.textContent = isCorrect
        ? "Excellent! Correct answer."
        : "Not quite. Let's learn.";

    feedbackSubtitle.textContent = isCorrect
        ? "You understood this concept."
        : "Review the explanation before moving forward.";

    feedbackExplanation.textContent = question.explanation;

    feedbackCode.textContent = question.example;

    feedbackTip.textContent = question.tip;

    feedbackIcon.style.color = isCorrect ? "var(--green)" : "var(--red)";

    feedbackIcon.style.background = isCorrect
        ? "rgba(117, 224, 177, 0.12)"
        : "rgba(255, 132, 151, 0.12)";

    feedbackElement.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        block: "nearest",
    });
}

/*=============== NEXT QUESTION ===============*/

function nextQuestion() {
    if (selectedAnswers.size === 0) return;

    if (!questionChecked) {
        checkAnswer();
        return;
    }

    if (currentIndex < TOTAL_QUESTIONS - 1) {
        currentIndex++;

        renderQuestion();

        quiz.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "auto"
                : "smooth",
            block: "start",
        });
    } else {
        finishQuiz();
    }
}

/*=============== FINISH QUIZ ===============*/

function finishQuiz() {
    if (completed) return;

    completed = true;

    clearInterval(timerInterval);

    updateTimer();

    const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100);

    const scoreData = {
        score: correctCount,

        total: TOTAL_QUESTIONS,

        percentage,

        completedAt: new Date().toISOString(),

        duration: elapsedTime,
    };

    /* Save roadmap-compatible result */

    const savedTest = saveStorage(scoreData);

    /* Hide quiz */

    quiz.classList.add("hidden");

    result.classList.remove("hidden");

    /* Render score */

    percentElement.textContent = `${percentage}%`;

    correctElement.textContent = `${correctCount}/${TOTAL_QUESTIONS}`;

    timeElement.textContent = formatTime(elapsedTime);

    bestElement.textContent = savedTest?.best
        ? `${savedTest.best.percentage}%`
        : `${percentage}%`;

    /* Score ring */

    const degrees = percentage * 3.6;

    ringElement.style.background = `
        conic-gradient(
            var(--cyan) 0deg,
            var(--violet) ${degrees}deg,
            rgba(255,255,255,0.07) ${degrees}deg,
            rgba(255,255,255,0.07) 360deg
        )
    `;

    /* Result message */

    if (percentage >= 90) {
        resultTitle.textContent = "Outstanding work!";

        messageElement.textContent =
            "You have a strong understanding of HTML images, responsive image techniques and visual composition.";
    } else if (percentage >= 75) {
        resultTitle.textContent = "Great progress!";

        messageElement.textContent =
            "You understand most image concepts. Review the remaining questions to strengthen your frontend skills.";
    } else if (percentage >= 50) {
        resultTitle.textContent = "You're getting there!";

        messageElement.textContent =
            "You have a good starting point. Revisit object-fit, aspect ratios and responsive images to improve.";
    } else {
        resultTitle.textContent = "Keep experimenting!";

        messageElement.textContent =
            "Every mistake is an opportunity to learn. Review the explanations and try the assessment again.";
    }

    /* Scroll to results */

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

/*=============== REVIEW ANSWERS ===============*/

function renderReview() {
    reviewContainer.innerHTML = "";

    userAnswers.forEach((answer, index) => {
        if (!answer) return;

        const item = document.createElement("article");

        item.className = "review-item";

        const status = document.createElement("span");

        status.className = answer.isCorrect
            ? "review-status good"
            : "review-status bad";

        status.textContent = answer.isCorrect ? "✓ CORRECT" : "✕ INCORRECT";

        const title = document.createElement("h4");

        title.textContent = `${String(index + 1).padStart(2, "0")}. ${answer.question}`;

        const selected = document.createElement("p");

        const selectedTexts = answer.options
            .filter((option) => answer.selected.includes(option.id))
            .map((option) => option.text);

        selected.textContent = `Your answer: ${selectedTexts.join(", ") || "No answer"}`;

        const correct = document.createElement("p");

        const correctTexts = answer.options
            .filter((option) => answer.correct.includes(option.id))
            .map((option) => option.text);

        correct.className = "review-answer";

        correct.textContent = `Correct answer: ${correctTexts.join(", ")}`;

        const explanation = document.createElement("p");

        explanation.textContent = answer.explanation;

        const example = document.createElement("pre");

        example.className = "sample";

        example.textContent = answer.example;

        const tip = document.createElement("p");

        tip.style.marginTop = "12px";

        tip.textContent = `✦ Deeper learning: ${answer.tip}`;

        item.append(
            status,
            title,
            selected,
            correct,
            explanation,
            example,
            tip,
        );

        reviewContainer.appendChild(item);
    });
}

/*=============== REVIEW TOGGLE ===============*/

function toggleReview() {
    const isHidden = reviewContainer.classList.contains("hidden");

    if (isHidden) {
        renderReview();

        reviewContainer.classList.remove("hidden");

        reviewButton.textContent = "Hide answer review ↑";

        reviewContainer.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "auto"
                : "smooth",
            block: "start",
        });
    } else {
        reviewContainer.classList.add("hidden");

        reviewButton.textContent = "Review answers ↓";
    }
}

/*=============== RETRY QUIZ ===============*/

function retryQuiz() {
    startQuiz();
}

/*=============== EXIT QUIZ ===============*/

function exitQuiz() {
    const shouldExit =
        completed ||
        confirm(
            "Leave this assessment? Your current attempt will not be saved.",
        );

    if (!shouldExit) return;

    clearInterval(timerInterval);

    quiz.classList.add("hidden");

    result.classList.add("hidden");

    intro.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

/*=============== EVENT LISTENERS ===============*/

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);

retryButton.addEventListener("click", retryQuiz);

reviewButton.addEventListener("click", toggleReview);

exitButton.addEventListener("click", exitQuiz);

/*=============== INITIALIZATION ===============*/

function initialize() {
    const savedData = readStorage();

    const previousTest = savedData.tests[TEST_ID];

    if (previousTest?.best) {
        bestElement.textContent = `${previousTest.best.percentage}%`;
    }
}

initialize();

/*=============== READY ===============*/

console.log(`Skill Check ${TEST_ID} — ${TEST_TITLE} ready.`);
