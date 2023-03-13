async function serviceComponent(target, contentType) {
    

    fetch(`https://cdn.contentful.com/spaces/c7mvxwqo377u/environments/master/entries?access_token=E-RDKeYnP6fPL12njEjE-P2mHwG0f1DQLfP2Ey7cgyY&content_type=${contentType}`).then((res) => {
        return res.json();
    }).then((data) => {

        // console.log(data);

        for (let r of data.items) {
            const entryTitle = r.fields.title;
            // console.log(serviceTitle);

            const entryDesc = r.fields.description;
            // console.log(serviceDesc);

            const entryImgId = r.fields.thumbnail.sys.id;

            const entryUrl = r.fields.url;

            for (let a of data.includes.Asset) {
                const thumbId = a.sys.id;
                
                if (thumbId == entryImgId) {

                    const thumbUrl = a.fields.file.url;

                    const containerEl = document.createElement('div');
    
                    containerEl.innerHTML = `
                    <div class="service-el">
                        <div class="service-el__img">
                            <img src="${thumbUrl}" alt="" class="service-el__image-el">
                        </div>
                        <div class="service-el__title">
                            <h3>${entryTitle}</h3>
                        </div>
                        <div class="service-el__desc">
                            <p>${entryDesc}</p>
                        </div>
                        <div class="service-el__link">
                            <a href="${entryUrl}" target="_blank">${entryUrl}</a>
                        </div>
                        
                    </div>
                    `
                    target.appendChild(containerEl);
                }
            }
        }
    });


};