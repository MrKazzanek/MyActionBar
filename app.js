// ─── DANE ───
const COLORS = [
  {id:0,hex:"#eeff70"},{id:1,hex:"#ffffff"},{id:2,hex:"#bababa"},{id:3,hex:"#636363"},{id:4,hex:"#2b2b2b"},{id:5,hex:"#171717"},{id:6,hex:"#000000"},
  {id:7,hex:"#ff3b5f"},{id:8,hex:"#ff002b"},{id:9,hex:"#ff0000"},{id:10,hex:"#990303"},{id:11,hex:"#470101"},
  {id:12,hex:"#ff9830"},{id:13,hex:"#ff8000"},{id:14,hex:"#ff5100"},{id:15,hex:"#c24004"},
  {id:16,hex:"#fcf062"},{id:17,hex:"#ffed2b"},{id:18,hex:"#ffea00"},{id:19,hex:"#e5ff00"},{id:20,hex:"#ffc800"},{id:21,hex:"#a38903"},
  {id:22,hex:"#7aff83"},{id:23,hex:"#36ff43"},{id:24,hex:"#00ff10"},{id:25,hex:"#2c9e33"},{id:26,hex:"#135e18"},{id:27,hex:"#033607"},{id:28,hex:"#011402"},
  {id:29,hex:"#73ffef"},{id:30,hex:"#00ffe1"},{id:31,hex:"#0f9989"},{id:32,hex:"#05453d"},
  {id:33,hex:"#85e0ff"},{id:34,hex:"#28c7fc"},{id:35,hex:"#00bfff"},{id:36,hex:"#03759c"},{id:37,hex:"#267dff"},{id:38,hex:"#0066ff"},{id:39,hex:"#2738f2"},{id:40,hex:"#0015ff"},{id:41,hex:"#0311a6"},{id:42,hex:"#01063d"},
  {id:43,hex:"#c085ff"},{id:44,hex:"#9a3bff"},{id:45,hex:"#7c00ff"},{id:46,hex:"#490394"},{id:47,hex:"#230147"},
  {id:48,hex:"#ff6bf0"},{id:49,hex:"#ff00e1"},{id:50,hex:"#cc00ff"},{id:51,hex:"#9c038d"},{id:52,hex:"#40103b"},
  {id:53,hex:"#7d4510"},{id:54,hex:"#4d2a09"},{id:55,hex:"#402001"},{id:56,hex:"#1c0e00"},
  {id:57,hex:"#7d5a37"},{id:58,hex:"#cc00ff"},{id:59,hex:"#f0b3ff"},{id:60,hex:"#f2ffb3"},{id:61,hex:"#b8f774"},{id:62,hex:"#74f7d4"},{id:63,hex:"#f79974"},{id:64,hex:"#468a0f"},
];
const SEPS = [
  {id:0,s:" • "},{id:1,s:"   "},{id:2,s:" | "},{id:3,s:" || "},{id:4,s:" / "},{id:5,s:" // "},{id:6,s:" /// "},
  {id:7,s:" + "},{id:8,s:" - "},{id:9,s:" * "},{id:10,s:" × "},{id:11,s:" ÷ "},{id:12,s:" = "},
  {id:13,s:" > "},{id:14,s:" < "},{id:15,s:" ` "},{id:16,s:" ' "},{id:17,s:" , "},{id:18,s:" . "},{id:19,s:" ; "},{id:20,s:" : "},
  {id:21,s:" @ "},{id:22,s:" # "},{id:23,s:" $ "},{id:24,s:" & "},{id:25,s:" % "},{id:26,s:" ! "},{id:27,s:" ? "},{id:28,s:" ^ "},{id:29,s:" _ "},{id:30,s:" ~ "},
  {id:31,s:" » "},{id:32,s:" x "},{id:33,s:" I "},{id:34,s:" ° "},{id:35,s:" © "},{id:36,s:" ® "},
  {id:37,s:" ℗ "},{id:38,s:" — "},{id:39,s:" ¦ "},{id:40,s:" ※ "},{id:41,s:" ⁜ "},{id:42,s:" ⁂ "},{id:43,s:" ⌂ "},
  {id:44,s:" ● "},{id:45,s:" ○ "},{id:46,s:" ◆ "},{id:47,s:" ◇ "},{id:48,s:" ■ "},{id:49,s:" □ "},
  {id:50,s:" ▲ "},{id:51,s:" ▼ "},{id:52,s:" ◀ "},{id:53,s:" ▶ "},{id:54,s:" › "},{id:55,s:" ‹ "},
  {id:56,s:" ⭐ "},{id:57,s:" ✦ "},{id:58,s:" ✧ "},{id:59,s:" ✶ "},{id:60,s:" ✷ "},{id:61,s:" ❈ "},{id:62,s:" ❉ "},{id:63,s:" ❊ "},{id:64,s:" ❋ "},
];
const EXTSEPS = [
  {id:0,l:"",r:""},{id:1,l:"[ ",r:" ]"},{id:2,l:"{ ",r:" }"},{id:3,l:"( ",r:" )"},
  {id:4,l:"} ",r:" {"},{id:5,l:") ",r:" ("},{id:6,l:"| ",r:" |"},{id:7,l:"|| ",r:" ||"},
  {id:8,l:"- ",r:" -"},{id:9,l:"-- ",r:" --"},{id:10,l:"-[ ",r:" ]-"},{id:11,l:"-( ",r:" )-"},{id:12,l:"-{ ",r:" }-"},
  {id:13,l:"+ ",r:" +"},{id:14,l:"= ",r:" ="},{id:15,l:"== ",r:" =="},{id:16,l:"-= ",r:" =-"},
  {id:17,l:"/ ",r:" /"},{id:18,l:"// ",r:" //"},{id:19,l:"> ",r:" <"},{id:20,l:"< ",r:" >"},
  {id:21,l:"-> ",r:" <-"},{id:22,l:"-< ",r:" >-"},{id:23,l:": ",r:" :"},{id:24,l:": : ",r:" : :"},
  {id:25,l:"I ",r:" I"},{id:26,l:"• ",r:" •"},{id:27,l:"« ",r:" »"},{id:28,l:"» ",r:" «"},
  {id:29,l:"› ",r:" ‹"},{id:30,l:"‹ ",r:" ›"},{id:31,l:"⭐ ",r:" ⭐"},{id:32,l:"¦ ",r:" ¦"},
  {id:33,l:"⁜ ",r:" ⁜"},{id:34,l:"※ ",r:" ※"},{id:35,l:"× ",r:" ×"},{id:36,l:"# ",r:" #"},
  {id:37,l:"% ",r:" %"},{id:38,l:"$ ",r:" $"},{id:39,l:"|= ",r:" =|"},{id:40,l:"~ ",r:" ~"},{id:41,l:"~~ ",r:" ~~"},
  {id:42,l:"^ ",r:" ^"},{id:43,l:"* ",r:" *"},{id:44,l:"** ",r:" **"},{id:45,l:"+- ",r:" -+"},
  {id:46,l:"<| ",r:" |>"},{id:47,l:"|< ",r:" >|"},{id:48,l:"[[ ",r:" ]]"},{id:49,l:"{{ ",r:" }}"},{id:50,l:"<< ",r:" >>"},
  {id:51,l:"(( ",r:" ))"},{id:52,l:"° ",r:" °"},{id:53,l:"○ ",r:" ○"},{id:54,l:"● ",r:" ●"},{id:55,l:"◆ ",r:" ◆"},{id:56,l:"◇ ",r:" ◇"},
  {id:57,l:"■ ",r:" ■"},{id:58,l:"□ ",r:" □"},{id:59,l:"▲ ",r:" ▲"},{id:60,l:"▼ ",r:" ▼"},{id:61,l:"◀ ",r:" ◀"},{id:62,l:"◁ ",r:" ◁"},
  {id:63,l:"@ ",r:" @"},{id:64,l:"? ",r:" ?"},
];
// koniec danych

const S = {
  show:1, show_clock:1, time_format:0, dynamic_clock_color:1,
  show_weather_info:1, weather_info_type:0,
  show_days:1, show_days_prefix:1,
  show_cordinates:0, show_cordinates_prefix:1,
  show_facing_direction:0, facing_direction_type:0, facing_direction_advanced:0,
  show_player_head:0, text_style:0, set_color:0, separators:0, external_separators:0,
};
let textures = { background:'assets/preview-background.png', hotbar:'assets/hotbar.png', playerHead:'assets/player-head.png' };
let sourceDatapack='My Action Bar.zip';
let displayOrder=['days','weather','clock','coords','direction','head'];
const orderNames={days:'Days',weather:'Weather',clock:'Clock',coords:'Coordinates',direction:'Facing Direction',head:'Player Head'};


function buildColorGrid(){
  const g = document.getElementById('colorGrid');
  COLORS.forEach(c=>{
    const d = document.createElement('div');
    d.className='color-swatch'+(c.id===0?' active':'');
    d.style.background=c.hex;
    d.title=`#${c.id}: ${c.hex}`;
    d.dataset.id=c.id;
    d.onclick=()=>{ document.querySelectorAll('.color-swatch').forEach(x=>x.classList.remove('active')); d.classList.add('active'); S.set_color=c.id; update(); };
    g.appendChild(d);
  });
}
function buildGrid(containerId, items, symFn, stateKey){
  const g=document.getElementById(containerId);
  items.forEach(item=>{
    const d=document.createElement('div');
    d.className='sep-chip'+(item.id===0?' active':'');
    d.textContent=symFn(item)||'(None)';
    d.dataset.id=item.id;
    d.onclick=()=>{
      document.querySelectorAll('#'+containerId+' .sep-chip').forEach(x=>x.classList.remove('active'));
      d.classList.add('active'); S[stateKey]=item.id; update();
    };
    g.appendChild(d);
  });
}


function bindControls(){
  ['show','show_clock','dynamic_clock_color','show_weather_info','show_days','show_days_prefix','show_cordinates','show_cordinates_prefix','show_facing_direction','facing_direction_advanced','show_player_head']
    .forEach(id=>{ const el=document.getElementById(id); if(el) el.addEventListener('change',()=>{S[id]=el.checked?1:0;update();}); });
  ['time_format','weather_info_type','facing_direction_type','text_style']
    .forEach(id=>{ const el=document.getElementById(id); if(el) el.addEventListener('change',()=>{S[id]=parseInt(el.value);update();}); });
  
  document.getElementById('dpName').addEventListener('input', ()=>{
    const n=(document.getElementById('dpName').value||'datapack').trim().replace(/\s+/g,'_');
    document.getElementById('dpZipName').textContent=n+'.zip';
  });
}

async function loadTextureConfig(){
  try { 
    const response=await fetch('config.json'); 
    if(response.ok){
      const config=await response.json(); 
      textures={...textures,...config.previewTextures}; 
      sourceDatapack=config.sourceDatapack||sourceDatapack;
    } 
  } catch (_) {}
  const bg=document.getElementById('mcBgImage'); bg.style.backgroundImage=`url("${textures.background}")`; bg.style.display='block'; document.getElementById('mcBgDefault').style.display='none';
  const hotbar=document.getElementById('hotbarImage'); hotbar.src=textures.hotbar; hotbar.onload=()=>{hotbar.style.display='block';document.getElementById('hotbarDefault').style.display='none';};
}
function getHeadSpan(){ const img=document.createElement('img'); img.src=textures.playerHead; img.className='ab-player-head'; img.alt=''; return img; }


const WEATHERS_ICON=['☀','☁','🌧','⛈'];
const WEATHERS_NAME=['Clear','Overcast','Rain','Thunder'];
const DIRS_FULL=['North','NorthEast','SOUTH-EAST','SouthEast','South','SouthWest','West','NorthWest'];
const DIRS_CARD=['North','SOUTH-EAST','SOUTH','West'];
const DIRS_S=['N','NE','SE','SE','S','SW','W','NW'];
const DIRS_CS=['N','E','S','W'];
let simTick=6000, simDay=1, simWeather=0;

function getSimColor(h){
  if(h>=6&&h<8)return'#ffcc55';
  if(h>=8&&h<12)return'#fffde8';
  if(h>=12&&h<17)return'#ffffff';
  if(h>=17&&h<19)return'#ffaa44';
  if(h>=19&&h<21)return'#ff7744';
  return'#8899cc';
}


function buildPreview(){
  const bar=document.getElementById('previewBar');
  bar.innerHTML='';

  if(!S.show){ bar.textContent='(Action Bar hidden)'; bar.style.color='#666'; return; }

  const hours24=((Math.floor(simTick/1000)+6)%24);
  const mins=Math.floor((simTick%1000)/1000*60);
  const ms=mins<10?'0'+mins:''+mins;

  const color=S.dynamic_clock_color?getSimColor(hours24):(COLORS[S.set_color]?.hex??'#eeff70');
  bar.style.color=color;

  
  const BOLD=[2,3,5,7,9,12].includes(S.text_style);
  const ITAL=[4,5,6,7,11,12].includes(S.text_style);
  const UND=[1,3,6,7,10,12].includes(S.text_style);
  const STR=[8,9,10,11,12].includes(S.text_style);
  bar.style.fontWeight=BOLD?'700':'400';
  bar.style.fontStyle=ITAL?'italic':'normal';
  const deco=[]; if(UND)deco.push('underline'); if(STR)deco.push('line-through');
  bar.style.textDecoration=deco.join(' ')||'none';

  const sep=SEPS[S.separators]?.s??'  •  ';
  const el=EXTSEPS[S.external_separators]??{l:'',r:''};

  const partMap={};

  if(S.show_weather_info){
    partMap.weather={type:'text',val:S.weather_info_type===1?WEATHERS_NAME[simWeather]:WEATHERS_ICON[simWeather]};
  }
  if(S.show_days){
    partMap.days={type:'text',val:S.show_days_prefix?`Day ${simDay}`:`${simDay}`};
  }
  if(S.show_clock){
    let t;
    if(S.time_format===1){const h=hours24%12||12;const ap=hours24<12?'AM':'PM';t=`${h}:${ms} ${ap}`;}
    else{const h=hours24<10?'0'+hours24:''+hours24;t=`${h}:${ms}`;}
    partMap.clock={type:'text',val:t};
  }
  if(S.show_cordinates){
    partMap.coords={type:'text',val:S.show_cordinates_prefix?'X: 128 Y: 64 Z: -200':'128 64 -200'};
  }
  if(S.show_facing_direction){
    const adv=S.facing_direction_advanced,short=S.facing_direction_type===1;
    const arr=adv?(short?DIRS_S:DIRS_FULL):(short?DIRS_CS:DIRS_CARD);
    partMap.direction={type:'text',val:arr[2]};
  }
  if(S.show_player_head){
    partMap.head={type:'head'};
  }
  const parts=displayOrder.map(key=>partMap[key]).filter(Boolean);

  // render
  if(el.l) bar.appendChild(document.createTextNode(el.l));
  parts.forEach((p,i)=>{
    if(i>0) bar.appendChild(document.createTextNode(sep));
    if(p.type==='head'){
      bar.appendChild(getHeadSpan());
    } else {
      bar.appendChild(document.createTextNode(p.val));
    }
  });
  if(el.r) bar.appendChild(document.createTextNode(el.r));
}


function updateRows(){
  const show=v=>v?'':'none';
  document.getElementById('row-time-format').style.display=show(S.show_clock);
  document.getElementById('row-weather-type').style.display=show(S.show_weather_info);
  document.getElementById('row-days-prefix').style.display=show(S.show_days);
  document.getElementById('row-coords-prefix').style.display=show(S.show_cordinates);
  document.getElementById('row-dir-type').style.display=show(S.show_facing_direction);
  document.getElementById('row-dir-adv').style.display=show(S.show_facing_direction);
  document.getElementById('color-picker-section').style.display=S.dynamic_clock_color?'none':'';
}


function buildCommandLines(){
  return [...Object.entries(S),['display_order',getDisplayOrderValue()]].map(([k,v])=>`/trigger ${k} set ${v}`);
}
function getDisplayOrderValue(){
  const base=['days','weather','clock','coords','direction','head']; const fact=n=>n<2?1:n*fact(n-1); let value=0,remaining=[...base];
  displayOrder.forEach(key=>{const index=remaining.indexOf(key);value+=index*fact(remaining.length-1);remaining.splice(index,1)}); return value;
}
function renderOrderGrid(){
  const grid=document.getElementById('orderGrid'); if(!grid) return; grid.innerHTML='';
  displayOrder.forEach((key,index)=>{
    const chip=document.createElement('div');
    chip.className='order-chip';
    
    const btnL=document.createElement('button');
    btnL.className='order-btn';
    btnL.innerHTML='◀';
    btnL.disabled=(index===0);
    btnL.onclick=()=>{
      if(index>0){
        [displayOrder[index-1],displayOrder[index]]=[displayOrder[index],displayOrder[index-1]];
        renderOrderGrid(); update();
      }
    };
    
    const label=document.createElement('span');
    label.className='order-label';
    label.textContent=`${index+1}. ${orderNames[key]}`;
    
    const btnR=document.createElement('button');
    btnR.className='order-btn';
    btnR.innerHTML='▶';
    btnR.disabled=(index===displayOrder.length-1);
    btnR.onclick=()=>{
      if(index<displayOrder.length-1){
        [displayOrder[index],displayOrder[index+1]]=[displayOrder[index+1],displayOrder[index]];
        renderOrderGrid(); update();
      }
    };
    
    chip.appendChild(btnL);
    chip.appendChild(label);
    chip.appendChild(btnR);
    grid.appendChild(chip);
  });
}
function randomizeSettings(){
  ['show','show_clock','dynamic_clock_color','show_weather_info','show_days','show_cordinates','show_facing_direction','show_player_head','show_days_prefix','show_cordinates_prefix','weather_info_type','facing_direction_type','facing_direction_advanced'].forEach(key=>S[key]=Math.round(Math.random()));
  S.set_color=Math.floor(Math.random()*65); S.separators=Math.floor(Math.random()*65); S.external_separators=Math.floor(Math.random()*65); S.text_style=Math.floor(Math.random()*13); S.time_format=Math.round(Math.random());
  displayOrder.sort(()=>Math.random()-.5); syncUI(); renderOrderGrid(); update();
}
function renderCommands(){
  const lines=buildCommandLines();
  const cmd=document.getElementById('cmdOutput');
  cmd.innerHTML=lines.map(l=>{
    const [a,b]=l.split(' set ');
    return `<span class="cmd-t">${a}</span> set <span class="cmd-v">${b}</span>`;
  }).join('\n');
  
  document.getElementById('valOutput').textContent = 
    [...Object.entries(S), ['display_order', getDisplayOrderValue()]]
    .map(([k,v])=>`${k} = ${v}`).join('\n');
}
function copyCommands(){
  navigator.clipboard.writeText(buildCommandLines().join('\n')).then(()=>{
    const b=document.getElementById('copyBtn');
    b.textContent='Copied!'; b.classList.add('ok');
    setTimeout(()=>{b.textContent='Copy Commands';b.classList.remove('ok');},2200);
  });
}


function onDpVersionChange(){
  document.getElementById('dpVerDisplay').textContent='v'+document.getElementById('dpVersion').value;
}
function toggleAdv(){
  const body=document.getElementById('advBody'),arr=document.getElementById('advArrow');
  const open=body.classList.toggle('open');
  arr.classList.toggle('open',open);
}

async function downloadDatapack(){
  const name = (document.getElementById('dpName').value || 'MyActionBar_AutoSetup').trim().replace(/\s+/g,'_');
  const desc = document.getElementById('dpDesc').value || 'My Action Bar — Auto Setup';
  const minFmt = parseInt(document.getElementById('dpMinFormat').value) || 101;
  const maxFmt = parseInt(document.getElementById('dpMaxFormat').value) || 999;
  const target = document.getElementById('dpTarget').value;
  const comments = document.getElementById('dpComments').checked;
  const notify = document.getElementById('dpNotify').checked;
  const ver = document.getElementById('dpVersion').value;

  const button = document.querySelector('.dl-btn');
  button.disabled = true;
  button.textContent = 'Creating ZIP...';

  try {
    const zip = new JSZip();

    zip.file('pack.mcmeta', JSON.stringify({
      pack: {
        description: {
          text: desc,
          color: "#fff04d",
          shadow_color: 16756224,
          bold: false,
          hover_event: {
            action: "show_text",
            value: {
              text: "By MrKazanek | v." + ver,
              color: "gold"
            }
          }
        },
        min_format: minFmt,
        max_format: maxFmt
      }
    }, null, 2));

   
    const tickJson = JSON.stringify({ values: ['mab_config:tick'] }, null, 2);
    
    zip.file('data/minecraft/tags/function/tick.json', tickJson); 
    zip.file('data/minecraft/tags/functions/tick.json', tickJson); 

    
    const values = [...Object.entries(S), ['display_order', getDisplayOrderValue()]];
    const setLines = values.map(([key, value]) => `scoreboard players set @s ${key} ${value}`).join('\n');

    let applyLines = [];
    if (comments) applyLines.push(`# apply.mcfunction\n# Generated by My Action Bar Configurator v${ver}\n# Apply configuration successfully after 2-tick delay`);
    
    applyLines.push('tag @s remove mab_delay_2');
    applyLines.push('tag @s add mab_configured');

    if (comments) applyLines.push('\n# Apply custom settings');
    applyLines.push(setLines);

    if (notify) {
      if (comments) applyLines.push('\n# Send notification');
      applyLines.push('tellraw @s [{"text":"[My Action Bar] ","color":"#fff04d","bold":true},{"text":"Configuration applied automatically!","color":"green"}]');
    }

    const applyContent = applyLines.join('\n') + '\n';
    zip.file('data/mab_config/function/apply.mcfunction', applyContent); 
    zip.file('data/mab_config/functions/apply.mcfunction', applyContent); 

    
    let tickLines = [];
    if (comments) tickLines.push(`# tick.mcfunction\n# 2-Tick Delay System. Zapewnia, że oryginalny datapack wpisał już swoje wartości przed nadpisaniem ich naszymi.`);
    
   
    tickLines.push(`execute as ${target}[tag=mab_delay_2] run function mab_config:apply`);
    
    tickLines.push(`execute as ${target}[tag=mab_delay_1] run tag @s add mab_delay_2`);
    tickLines.push(`execute as ${target}[tag=mab_delay_1] run tag @s remove mab_delay_1`);
    
    tickLines.push(`execute as ${target}[tag=!mab_configured,tag=!mab_delay_1,tag=!mab_delay_2] run tag @s add mab_delay_1`);

    const tickContent = tickLines.join('\n') + '\n';
    zip.file('data/mab_config/function/tick.mcfunction', tickContent); 
    zip.file('data/mab_config/functions/tick.mcfunction', tickContent); 

    const blob = await zip.generateAsync({type: 'blob', compression: 'DEFLATE'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name + '.zip';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    
    button.textContent = '✓ ZIP Downloaded';
  } catch(error) {
    alert('Error generating zip: ' + error.message);
    button.textContent = 'Download Datapack';
  } finally {
    setTimeout(() => {
      button.disabled = false;
      button.textContent = 'Download Datapack';
    }, 2000);
  }
}

// ─── Resetowanie ───
function resetActionBarSettings(){
  Object.assign(S,{
    show:1,show_clock:1,time_format:0,dynamic_clock_color:1,
    show_weather_info:1,weather_info_type:0,
    show_days:1,show_days_prefix:1,
    show_cordinates:0,show_cordinates_prefix:1,
    show_facing_direction:0,facing_direction_type:0,facing_direction_advanced:0,
    show_player_head:0,text_style:0,set_color:0,separators:0,external_separators:0,
  });
  displayOrder=['days','weather','clock','coords','direction','head'];
  syncUI();
  renderOrderGrid();
  update();
}

function resetDatapackSettings() {
  document.getElementById('dpName').value = 'MyActionBar_AutoSetup';
  document.getElementById('dpDesc').value = 'Shows customizable information on the Action Bar';
  document.getElementById('dpMinFormat').value = '101';
  document.getElementById('dpMaxFormat').value = '999';
  document.getElementById('dpTarget').value = '@a';
  document.getElementById('dpComments').checked = true;
  document.getElementById('dpNotify').checked = true;
  
  document.getElementById('dpZipName').textContent = 'MyActionBar_AutoSetup.zip';
}

function syncUI(){
  ['show','show_clock','dynamic_clock_color','show_weather_info','show_days','show_days_prefix','show_cordinates','show_cordinates_prefix','show_facing_direction','facing_direction_advanced','show_player_head']
    .forEach(id=>{ const el=document.getElementById(id); if(el) el.checked=S[id]===1; });
  ['time_format','weather_info_type','facing_direction_type','text_style']
    .forEach(id=>{ const el=document.getElementById(id); if(el) el.value=S[id]; });
  document.querySelectorAll('.color-swatch').forEach(s=>s.classList.toggle('active',parseInt(s.dataset.id)===S.set_color));
  document.querySelectorAll('#sepGrid .sep-chip').forEach(s=>s.classList.toggle('active',parseInt(s.dataset.id)===S.separators));
  document.querySelectorAll('#extSepGrid .sep-chip').forEach(s=>s.classList.toggle('active',parseInt(s.dataset.id)===S.external_separators));
}


document.querySelectorAll('.right-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.right-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-commands').style.display=tab.dataset.tab==='commands'?'':'none';
    document.getElementById('tab-datapack').style.display=tab.dataset.tab==='datapack'?'':'none';
  });
});


function update(){ buildPreview(); renderCommands(); updateRows(); }


setInterval(()=>{
  simTick=(simTick+20)%24000;
  if(simTick<20){ simDay++; simWeather=(simWeather+1)%4; }
  buildPreview();
},200);


buildColorGrid();
buildGrid('sepGrid',SEPS,i=>i.s.trim()||'(None)','separators');
buildGrid('extSepGrid',EXTSEPS,i=>i.l||i.r?i.l+'…'+i.r:'(None)','external_separators');
bindControls();
renderOrderGrid();
update();
loadTextureConfig();