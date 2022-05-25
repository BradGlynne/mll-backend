exports.buildJson = function (origin, destination, isRush, rushTargetDate, volume, collateral, eveCharacterName, discordId, structureType, submittedDate, discordRoleId){
  let rushDate = 'N/A'
  if (isRush) {
    rushDate = rushTargetDate.toLocaleString('en-GB', {timeZone: 'UTC'})
  }
    let jsonData = {
        "username": "MLL Custom Contract Request",
        "avatar_url": "https://multi-lemm-logistics.com/img/logo.png",
        "content": `<@&${discordRoleId}>`,
        "embeds": [
            {
                "author": {
                    "name": "MLL Custom Contract Bot",
                    "url": "http://multi-lemm-logistics.com",
                    "icon_url": "https://multi-lemm-logistics.com/img/logo.png"
                },
                "title": "MLL Custom Contract Notification",
                "url": "http://multi-lemm-logistics.com/contracts",
                "description": `**${eveCharacterName} (${discordId})** has put up a custom contract request, see below for details.`,
                "color": 16757309,
                "fields": [
                    {
                        "name": "Origin",
                        "value": `${origin}`,
                        "inline": true
                    },
                    {
                        "name": "Destination",
                        "value": `${destination}`,
                        "inline": true
                    },
                    {
                        "name": "Volume",
                        "value": `${volume.toLocaleString("en-GB")} m3`,
                        "inline": true
                    },
                    {
                        "name": "Collateral",
                        "value": `${collateral.toLocaleString("en-GB")} ISK`,
                        "inline": true
                    },
                    {
                        "name": "Rush Target Date",
                        "value": `${rushDate}`,
                        "inline": true
                    },
                    {
                        "name": "Origin & Destination PH/NPC Structure",
                        "value": `${structureType}`,
                        "inline": true
                    },
                    {
                        "name": "Request Date",
                        "value": `${submittedDate.toLocaleString('en-GB', {timeZone: 'UTC'})}`,
                        "inline": true
                    }
                ]
            }
        ]
    };


    return jsonData;
}
