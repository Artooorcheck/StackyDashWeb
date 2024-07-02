
function CloudLoad() {
    let data = {}
    if(true) {
        let json = JSON.stringify(data);
        unityGameInstance.SendMessage('JSBridge', 'InitGame', '');
        return;
    }
    player.getData().then(_data => {
        _data.locale = ysdk.environment.i18n.lang;
        let json = JSON.stringify(_data);
        unityGameInstance.SendMessage('JSBridge', 'InitGame', json);
    }).catch((err) => {
        let json = JSON.stringify(data);
        unityGameInstance.SendMessage('JSBridge', 'InitGame', json);
        console.log(err);
    });
}

function ResumeGame(){
    unityGameInstance.SendMessage('JSBridge', 'ResumeGame');
}

function PauseGame(){
    unityGameInstance.SendMessage('JSBridge', 'PauseGame');
}

function TurnOnSound(){
    unityGameInstance.SendMessage('JSBridge', 'SoundOn');

}

function TurnOffSound(){
    unityGameInstance.SendMessage('JSBridge', 'SoundOff');
}
