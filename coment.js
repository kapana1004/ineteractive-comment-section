import data from "./data.json" assert{type: "json"};




const {currentUser, comments} = data;
const mainSection = document.querySelector(".main");





function composing(tag, className, id, text, src ){

   

    const element = document.createElement(tag);

   
    element.classList.add(className);
    if(id){
        element.id = id;
    };
    if(text){

        element.textContent = text;
    };
    if(src){

        element.src = src;
    }
    return element;

}


function commentsDisplay(comments){

    mainSection.innerHTML='';

    for(let i = 0; i < comments.length; i++){
        const comment = comments[i];
        let { id, content, createdAt, score, user, replies } = comment;
        let {image} = user;

        let comentDiv = composing('div', 'cont1Desk', id );
        let voteBox = composing('div', 'deskPlus1');
        let plusImg = composing('img', 'deskPlus', null, null, './images/icon-plus.svg');
        let voteSpan = composing('span', 'desk12', null, score);

          plusImg.onclick = function() {voteSpan.innerHTML = +voteSpan.textContent + 1};

        let minusImg = composing('img', 'deskMinus1', null, null, './images/icon-minus.svg');

          minusImg.onclick = function() {voteSpan.innerHTML = +voteSpan.textContent - 1;
            if (voteSpan.textContent < 0){
                voteSpan.textContent = 0;
            }};

        let commentPanel = composing('div', 'amyDesk');
        let panelHead = composing('div', 'amyLine');
        let panelDate = composing('div', 'amyDate',);
        let avatarImage = composing('img', 'amyAvatDesk', null, null, image.png);
        let amyName = composing('span','amyDeskname', null, user.username);
        let commentDate = composing('span', 'deskDate1', null, createdAt);
        let commentReplay = composing('div', 'deskReplay1');

        commentReplay.onclick = function(){

            let juliusDiv = composing('div', null, 'newReply');
            let juliusAvatar = composing('img', 'avatJuliusDesk', null, null, './images/avatars/image-juliusomo.png');
            let juliusText = composing('textarea', 'avatTextDesk');
                juliusText.value = '@' + user.username;
            
            let JuliusButtonDiv = composing('div', 'avatar');
            let juliusButton = composing('button', 'sendDesk', null, 'REPLY');

            juliusDiv.append(juliusAvatar);
            juliusDiv.append(juliusText);
            juliusDiv.append(JuliusButtonDiv);
            JuliusButtonDiv.append(juliusButton);

            mainSection.insertBefore(juliusDiv, comentDiv.nextElementSibling.nextElementSibling);

        }

           
        let replayImage = composing('img', 'replayIconDesk1', null, null, './images/icon-reply.svg');
        let replaySpan = composing('span', 'replayDesk1', null, ' Reply');
        let pannelPar = composing('p', 'par1desk', null, content);
      

            
        
        


    
      
        mainSection.append(comentDiv);
        comentDiv.append(voteBox);
        voteBox.append(plusImg);
        voteBox.append(voteSpan);
        voteBox.append(minusImg);
        comentDiv.append(commentPanel);
        commentPanel.append(panelHead);
        panelHead.append(panelDate);
        panelDate.append(avatarImage);
        panelDate.append(amyName);
        panelDate.append(commentDate);
        panelHead.append(commentReplay);
        commentReplay.append(replayImage);
        commentReplay.append(replaySpan);
        commentPanel.append(pannelPar);
       
        

      
        let replayContainer = composing('div', 'forLine', id);
        mainSection.append(replayContainer);
    

        for(let i =0; i<replies.length; i++){



            
            // let lineDiv = composing('div', 'line');
            
            let replayDives = composing('div', 'cont3-4');
            let replaySingleDiv = composing('div', 'cont34Desk');
            let replayVote = composing('div', 'deskPlus1');
            let replayUpVoteImage = composing('img', 'deskPlus', null, null, './images/icon-plus.svg');
            let replaySpan = composing('span', 'desk12', null, replies[i].score);

            replayUpVoteImage.onclick = function() {replaySpan.innerHTML = +replaySpan.textContent + 1};

            let replayDownVoteImage = composing('img', 'deskMinus1', null, null, './images/icon-minus.svg');

            replayDownVoteImage.onclick = function() {replaySpan.innerHTML = +replaySpan.textContent - 1;
                if (replaySpan.textContent < 0){
                    replaySpan.textContent = 0;
                }
            };

            let replayPanel = composing('div', 'amyDesk')
            let replayHeadDiv = composing('div', 'amyLine');
            let replayDate = composing('div', 'amyDate');
            let replayAvatar = composing('img', 'amyAvatDesk', null, null, replies[i].user.image.png);
            let replayUserName = composing('span', 'amyDeskame', null, replies[i].user.username);

            let replayYou = composing('div', 'youDesk');
            let replayYouText = composing('span', 'youDesk1', null, 'you');
            let replayAT = composing('span', 'deskDate1', null, replies[i].createdAt);
            let replayIconDiv = composing('div', 'deskReplay1');
            replayIconDiv.onclick = function(){

                let juliusDiv = composing('div', null, 'newReply');
                let juliusAvatar = composing('img', 'avatJuliusDesk', null, null, './images/avatars/image-juliusomo.png');
                let juliusText = composing('textarea', 'avatTextDesk');
                    juliusText.value = '@' + replies[i].user.username;
                
                let JuliusButtonDiv = composing('div', 'avatar');
                let juliusButton = composing('button', 'sendDesk', null, 'REPLY');
    
                juliusDiv.append(juliusAvatar);
                juliusDiv.append(juliusText);
                juliusDiv.append(JuliusButtonDiv);
                JuliusButtonDiv.append(juliusButton);
    
                mainSection.insertBefore(juliusDiv, comentDiv.nextElementSibling.nextElementSibling);
    
            }

            
            let replayIconImage = composing('img', 'replayIconDesk1', null, null, './images/icon-reply.svg');
            let replayIconSpan = composing('span', 'replayDesk1', null, ' Reply');
            let replayPanelPar = composing('p', 'par34desk', null, replies[i].content);
            let replayTag = composing('span', 'AT', null, replies[i].user.username);
         
            let deletReplayComment = composing('div', 'deskReplay1', 'deletComment');
            let deletIcon = composing('img', 'delDesk', null, null, './images/icon-delete.svg')
            let deletSpan = composing('span', 'dd', null, 'Delete');
            let editIcon = composing('img', 'replayIconDesk1', null, null, './images/icon-edit.svg');
            let editSpan = composing('span', 'replayDesk1', null, 'Edit');

            
            // let textSpace = composing('div', 'cont5Desk');
            // let textAvatar = composing('img', 'avatJuliusDesk', null, null, currentUser.image.png);
            // let textMessage = composing('textarea', 'avatTextDesk');
            // textMessage.placeholder = 'Add a comment...';

           
            // let textSend = composing('div', 'avatar');
            // let textButton = composing('button', 'sendDesk', null, 'SEND');

           
            
            // replayContainer.append(lineDiv);
           replayContainer.append(replayDives);
           replayDives.append(replaySingleDiv);
           replaySingleDiv.append(replayVote);
           replayVote.append(replayUpVoteImage);
           replayVote.append(replaySpan);
           replayVote.append(replayDownVoteImage);
           replaySingleDiv.append(replayPanel);
           replayPanel.append(replayHeadDiv);
           replayHeadDiv.append(replayDate);
           replayDate.append(replayAvatar);
           replayDate.append(replayUserName);
           replayDate.append(replayAT);

           
           replayHeadDiv.append(replayIconDiv);
           replayIconDiv.append(replayIconImage);
           replayIconDiv.append(replayIconSpan);

           
           replayPanel.append(replayPanelPar);

           if(replies[i].user.username === 'juliusomo'){
            replayDate.append(replayYou);
            replayYou.append(replayYouText);
            replayDate.append(replayAT);

            replayIconDiv.remove();

            replayHeadDiv.append(deletReplayComment);
            deletReplayComment.append(deletIcon);
            deletReplayComment.append(deletSpan);
            deletReplayComment.append(editIcon);
            deletReplayComment.append(editSpan);
           }

  
           
           


           





          



            
            
 
         }

        
    }

    
}










commentsDisplay(comments);