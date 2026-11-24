(() => {
  'use strict';
  const el = document.getElementById('office-map');
  const status = document.getElementById('map-status');
  if (!el || !status) return;
  const key = 'adsesoralia-office-osm-exact-v1';
  // Coordenadas del enlace proporcionado por el usuario: centro inicial, no dirección verificada.
  const initial = {lat:28.10045, lon:-15.45036};
  let point = initial, exact = false, map, marker, fallback = false, timer;
  const valid = p => p && Number.isFinite(p.lat) && Number.isFinite(p.lon) && p.lat > 28 && p.lat < 28.25 && p.lon > -15.6 && p.lon < -15.35;
  try { const p = JSON.parse(localStorage.getItem(key)); if(valid(p)){point=p;exact=true;} } catch (_) {}
  const statusText = () => { status.hidden=exact; status.textContent=exact?'':'Ubicación aproximada · Avenida Escaleritas, 161.'; };
  function embed(){
    if(map){map.remove();map=null;}
    fallback=true; clearTimeout(timer);
    const frame=document.createElement('iframe');
    frame.title='Mapa de ubicación de Adsesoralia';
    const u=new URL('https://www.openstreetmap.org/export/embed.html');
    const params={bbox:[point.lon-.012,point.lat-.007,point.lon+.012,point.lat+.007].join(','),layer:'mapnik'};
    if(exact)params.marker=`${point.lat},${point.lon}`;
    u.search=new URLSearchParams(params);frame.src=u.href;frame.referrerPolicy='strict-origin-when-cross-origin';
    el.replaceChildren(frame);statusText();
  }
  function update(){
    if(fallback){embed();return;}
    if(!map)return;
    map.jumpTo({center:[point.lon,point.lat]});
    marker.setLngLat([point.lon,point.lat]);
    marker.getElement().setAttribute('aria-label',exact?'Adsesoralia, Avenida Escaleritas 161':'Ubicación aproximada de Adsesoralia');
    statusText();
  }
  try{
    if(!window.maplibregl)throw Error('MapLibre no disponible');
    map=new maplibregl.Map({container:el,style:'https://tiles.openfreemap.org/styles/positron',center:[point.lon,point.lat],zoom:14,scrollZoom:false,attributionControl:false});
    map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-left');
    map.addControl(new maplibregl.AttributionControl({compact:true}),'bottom-right');
    marker=new maplibregl.Marker({color:'#ff914d'}).setLngLat([point.lon,point.lat]).addTo(map);
    update();
    timer=setTimeout(()=>{if(!fallback)embed();},12000);
    map.once('load',()=>{clearTimeout(timer);statusText();});
  }catch(_){embed();}
  if(!exact){
    const controller=new AbortController(); const deadline=setTimeout(()=>controller.abort(),8000);
    (async()=>{try{
      const u=new URL('https://nominatim.openstreetmap.org/search');
      u.search=new URLSearchParams({format:'jsonv2',street:'161 Avenida Escaleritas',city:'Las Palmas de Gran Canaria',countrycodes:'es',addressdetails:'1',limit:'3'});
      const res=await fetch(u,{signal:controller.signal,headers:{Accept:'application/json'}});if(!res.ok)return;
      const rows=await res.json();const r=rows.find(r=>r.address?.house_number==='161'&&/escaleritas/i.test(r.address.road||'')&&valid({lat:Number(r.lat),lon:Number(r.lon)}));
      if(r){point={lat:Number(r.lat),lon:Number(r.lon)};exact=true;try{localStorage.setItem(key,JSON.stringify(point));}catch(_){}update();}
    }catch(_){}finally{clearTimeout(deadline);}})();
  }
})();
