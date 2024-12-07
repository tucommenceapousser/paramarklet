(function(){function getURLParams(url){const params={};const parser=new URL(url);parser.searchParams.forEach((value,key)=>{if(!params[key])params[key]=[];params[key].push(value)});return params}function analyzeCurrentPage(){const urls=new Set();const paramsCollection={};const currentPageParams=getURLParams(window.location.href);if(Object.keys(currentPageParams).length>0){paramsCollection['current_page']=currentPageParams}document.querySelectorAll("a[href]").forEach(link=>{const href=link.href;if(href.startsWith(window.location.origin)){urls.add(href)}});urls.forEach(url=>{const params=getURLParams(url);if(Object.keys(params).length>0){paramsCollection[url]=params}});return paramsCollection}function downloadResults(results){const data=JSON.stringify(results,null,2);const blob=new Blob([data],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="url_parameters_results.json";a.click();URL.revokeObjectURL(url)}function displayResults(results){const output=document.createElement("div");output.style.position="fixed";output.style.top="10px";output.style.right="10px";output.style.backgroundColor="#101010";output.style.color="#fff";output.style.padding="15px";output.style.border="2px solid #ff00ff";output.style.borderRadius="8px";output.style.boxShadow="0 0 15px #ff00ff";output.style.zIndex="9999";output.style.maxHeight="90vh";output.style.overflowY="auto";output.style.fontFamily="monospace";output.style.fontSize="14px";output.style.width="300px";const header=document.createElement("h3");header.innerText="URL Parameters Found";header.style.color="#00ffff";header.style.margin="0 0 10px 0";header.style.textAlign="center";output.appendChild(header);const description=document.createElement("p");description.innerText="Ce bookmarklet analyse la page actuelle pour détecter les paramètres d'URL ainsi que ceux des liens internes sur le site.";description.style.color="#fff";description.style.marginBottom="10px";description.style.fontSize="12px";output.appendChild(description);const resultsBox=document.createElement("pre");resultsBox.style.backgroundColor="#111";resultsBox.style.color="#00ff00";resultsBox.style.padding="10px";resultsBox.style.borderRadius="5px";resultsBox.style.overflowX="auto";resultsBox.innerText=JSON.stringify(results,null,2);output.appendChild(resultsBox);const footer=document.createElement("p");footer.innerText="Powered by trhacknon";footer.style.color="#ff00ff";footer.style.marginTop="10px";footer.style.fontSize="12px";footer.style.textAlign="center";output.appendChild(footer);const closeButton=document.createElement("button");closeButton.innerText="Fermer";closeButton.style.backgroundColor="#ff00ff";closeButton.style.color="#fff";closeButton.style.border="none";closeButton.style.padding="5px 10px";closeButton.style.cursor="pointer";closeButton.style.marginTop="10px";closeButton.onclick=()=>document.body.removeChild(output);output.appendChild(closeButton);const downloadButton=document.createElement("button");downloadButton.innerText="Télécharger les résultats";downloadButton.style.backgroundColor="#00ff00";downloadButton.style.color="#000";downloadButton.style.border="none";downloadButton.style.padding="5px 10px";downloadButton.style.cursor="pointer";downloadButton.style.marginTop="10px";downloadButton.onclick=()=>downloadResults(results);output.appendChild(downloadButton);document.body.appendChild(output)}const results=analyzeCurrentPage();displayResults(results)})();
