sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/risk/test/integration/FirstJourney',
		'riskmanagement/risk/test/integration/pages/RiskList',
		'riskmanagement/risk/test/integration/pages/RiskObjectPage'
    ],
    function(JourneyRunner, opaJourney, RiskList, RiskObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/risk') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRiskList: RiskList,
					onTheRiskObjectPage: RiskObjectPage
                }
            },
            opaJourney.run
        );
    }
);