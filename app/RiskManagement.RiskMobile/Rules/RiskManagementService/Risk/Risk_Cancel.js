export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementService.service').isDraftEnabled('Risk')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risk'
                },
                'OnSuccess': '/RiskMobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/CloseModalPage_Cancel.action');
    }
}