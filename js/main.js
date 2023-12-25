import TypeIt from "typeit";

const typewriter = new TypeIt("#hero-title", {
    speed: 65,
    afterComplete,
});

const words = [
    'Challenge',
    'Push',
    'Elevate',
    'Strengthen',
    'Surpass',
    'Empower',
    'Motivate',
    'Transform',
    'Test',
    'Exceed',
    'Outdo',
    'Propel',
    'Improve',
    'Boost',
    'Upgrade',
    'Forge',
    'Excel',
    'Maximize',
    'Amplify',
    'Ignite',
    'Activate',
    'Discipline',
    'Commit',
    'Unleash',
    'Accelerate',
    'Enhance',
    'Intensify',
    'Perfect',
    'Sculpt',
    'Renew',
    'Energize',
    'Cultivate',
];

words.forEach((word, index) => {
    const isFirstEl = index === 0;

    let text = word;

    if (isFirstEl) {
        text += ` Yourself`
    }

    typewriter.type(text);
    typewriter.pause(1500);

    if (isFirstEl) {
        typewriter.move(-word.length);
    }

    typewriter.delete(word.length);
});

typewriter.go();

function afterComplete() {
    typewriter.reset();
    typewriter.go();
}
