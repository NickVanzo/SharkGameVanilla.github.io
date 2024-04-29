const HelpersText = {
    '#resource-shark': 'Obtains: <br/><span class="fish-yellow">fish</span>',
    '#resource-ray': 'Obtains: <br/><span class="fish-yellow">fish</span><br/><span class="sand-yellow">sand</span>',
    '#resource-crab': 'Obtains: <br/><span class="crab-red">crystals</span>',
    '#resource-scientist': 'Obtains: <br/><span class="science-purple">science</span>',
    '#resource-science': 'Obtained by: <br/><span class="shark-white">science shark</span>',
    '#resource-fish': 'Obtained by: <br/><span class="shark-blue">shark</span><br/><span class="ray-blue">ray</span>',
    '#resource-sand': 'Obtained by: <br/><span class="ray-blue">ray</span>',
    '#resource-crystal': 'Obtained by: <br/><span class="shark-white">crabs</span>'
};
let infoPanelOpened = 0;

$(document).ready(function () {
    const tableContainer = $('#status');
    if(tableContainer) {
        tableContainer.on('mouseenter', () => {
            infoPanelOpened++;
            console.log(`Info panel was opened: ${infoPanelOpened}`);
        })
    }
});
