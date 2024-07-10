import { JSDOM } from 'jsdom';

//Créez un DOM simulé pour nos tests
const dom = new JSDOM(`
    <div id="hover-area"></div>
    <p id="interaction-result"></p>
    `);

    global.document = dom.window.document;

    const hoverArea = document.getElementById('hover-area');
    const interactionResult = document.getElementById('interaction-result');

    //Importez le code à tester
    require('./ex5');

    describe('hover area interaction', () => {
        test('should update text content when user hovers over the area', () => {
            const mouseOverEvent = new dom.window.MouseEvent('mouseover', {
                bubbles: true,
                cancelable: true,
                view: dom.window,
            });

            hoverArea.dispatchEvent(mouseOverEvent);

            expect(interactionResult.textContent).toBe('User is hovering over the area!');
        });
    });