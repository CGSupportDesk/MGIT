(function () {
  'use strict';
  const data = window.MGIT_COURSES || { cdit: [], tally: [], all: [] };
  const WA_NUMBER = '918606622111'; // Confirm the current number with MGIT before launch.
  const categories = [
    'Computer Applications & Office Productivity',
    'Accounting, Finance & Tally',
    'AI, Data & Emerging Technology',
    'Programming & Software Development',
    'Hardware, Networking & Cybersecurity',
    'Design, Multimedia & CAD',
    'Digital Marketing',
    'Malayalam Computing & Publishing'
  ];
  const categoryIcons = ['monitor', 'calculator', 'sparkles', 'code', 'shield', 'palette', 'megaphone', 'languages'];
  const iconPaths = {
    arrow:'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    arrowUpRight:'<path d="M7 17 17 7M8 7h9v9"/>',
    chevron:'<path d="m9 18 6-6-6-6"/>',
    chevronDown:'<path d="m6 9 6 6 6-6"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    close:'<path d="M6 6l12 12M18 6 6 18"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    inbox:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 13 5 0 2 3h4l2-3h5"/>',
    monitor:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8M12 18v4"/>',
    calculator:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h2M14 11h2M8 16h2M14 16h2"/>',
    sparkles:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>',
    code:'<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    shield:'<path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6z"/><path d="m9 12 2 2 4-4"/>',
    palette:'<path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 1-4 2 2 0 0 1 1-4h2a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z"/><circle cx="7" cy="10" r=".7"/><circle cx="11" cy="7" r=".7"/><circle cx="16" cy="9" r=".7"/>',
    megaphone:'<path d="m3 11 14-6v14L3 13zM7 14l2 6h4l-2-5M20 9l2-1M20 15l2 1"/>',
    languages:'<path d="M4 7h13M10 4v3M14 7c0 6-4 9-9 12M7 11c2 3 4 5 8 6M14 18h8M18 10l-4 12M18 10l4 12"/>',
    book:'<path d="M4 5c3-1 5-1 8 0 3-1 5-1 8 0v15c-3-1-5-1-8 0-3-1-5-1-8 0zM12 5v15"/>',
    phone:'<path d="M6 3h4l2 5-2 2c1 3 3 5 6 6l2-2 4 2v4c-7 4-18-7-19-15z"/>',
    message:'<path d="M21 11a8 8 0 0 1-8 8H6l-3 3v-8a8 8 0 1 1 18-3z"/>',
    location:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    graduation:'<path d="m2 10 10-6 10 6-10 6-10-6zM6 12v5c4 3 8 3 12 0v-5M22 10v7"/>',
    layers:'<path d="m12 2 10 6-10 6L2 8zM2 12l10 6 10-6M2 16l10 6 10-6"/>'
  };
  function icon(name, cls='icon') { return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.book}</svg>`; }
  function escapeHTML(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function detailId(obj) { return obj.collection === 'Tally Education reference' ? `tally-${obj.no}` : obj.collection === 'MGIT Professional Courses' ? `sap-${obj.no}` : `cdit-${obj.no}`; }
  function enquireUrl(course) { return `contact.html?course=${encodeURIComponent(course)}`; }
  function tagFor(course) { return course.collection === 'Tally Education reference' ? 'Tally Education' : course.collection === 'MGIT Professional Courses' ? 'SAP Professional' : 'C-DIT reference'; }
  function card(course) {
    const tally = course.collection === 'Tally Education reference';
    const professional = course.collection === 'MGIT Professional Courses';
    const duration = course.duration || 'Ask MGIT';
    return `<article class="course-card" data-course-key="${escapeHTML(detailId(course))}">
      <div class="course-meta"><span class="tiny-tag ${tally?'tally':''} ${professional?'sap':''}">${professional?'SAP Professional':tally?'Tally Education':'C-DIT Course'}</span><span class="course-duration">${icon('clock','icon icon-sm')} ${escapeHTML(duration)}</span></div>
      <h3>${escapeHTML(course.name)}</h3><p class="course-desc">${escapeHTML(course.description)}</p>
      <div class="course-footer"><button type="button" data-open-course="${escapeHTML(detailId(course))}">View details ${icon('arrow','icon icon-sm')}</button><a href="${enquireUrl(course.name)}">Enquire</a></div>
    </article>`;
  }
  function emptyState() { return `<div class="empty-state">${icon('search','icon icon-xl')}<h3>No matching courses found</h3><p>Try a different keyword or change your filters.</p><button class="btn btn-outline btn-sm" type="button" data-reset-courses>Clear filters</button></div>`; }
  let lastModalTrigger = null;
  function openCourse(courseId, trigger) {
    const course = [...data.cdit, ...data.tally].find(c => detailId(c) === courseId);
    const modal = document.getElementById('courseModal');
    if (!course || !modal) return;
    lastModalTrigger = trigger || document.activeElement;
    document.getElementById('modalContents').innerHTML = `<span class="eyebrow">${escapeHTML(tagFor(course))}</span>
      <h2 id="modalTitle">${escapeHTML(course.name)}</h2>
      <div class="modal-facts"><span class="modal-fact">${icon('clock','icon icon-sm')} ${escapeHTML(course.duration)}</span>${course.code?`<span class="modal-fact">Code: ${escapeHTML(course.code)}</span>`:''}</div>
      <p class="modal-description">${escapeHTML(course.description)}</p>
      <div class="notice-inline">${icon('info')}<span>Information is drawn from the supplied course reference. Confirm current syllabus, eligibility, fees, certification and batch availability with MGIT.</span></div>
      <div class="modal-actions button-row"><a class="btn btn-primary" href="${enquireUrl(course.name)}">Enquire about this course ${icon('arrow','icon icon-sm')}</a><a class="btn btn-outline" target="_blank" rel="noopener noreferrer" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hello MGIT Computer Education, I would like details about '+course.name+'.')}">${icon('message','icon icon-sm')} WhatsApp</a></div>`;
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
    const close = modal.querySelector('.modal-close'); if (close) close.focus();
  }
  function closeCourse() {
    const modal=document.getElementById('courseModal');if(!modal)return;
    modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');
    if(lastModalTrigger && lastModalTrigger.focus)lastModalTrigger.focus();
  }
  function fillCategoryOptions(el) {
    if (!el) return;
    el.insertAdjacentHTML('beforeend', categories.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join(''));
  }
  function initCourses() {
    const root=document.getElementById('courseResults'); if(!root)return;
    const search=document.getElementById('courseSearch');
    const category=document.getElementById('courseCategory');
    const length=document.getElementById('courseDuration');
    const collection=document.getElementById('courseCollection');
    const more=document.getElementById('loadMoreBtn');
    const count=document.getElementById('resultsCount');
    fillCategoryOptions(category);
    const params=new URLSearchParams(location.search);
    if(params.has('category') && categories.includes(params.get('category')))category.value=params.get('category');
    if(params.has('q'))search.value=params.get('q');
    if(params.has('collection') && ['C-DIT','Tally'].includes(params.get('collection')))collection.value=params.get('collection');
    let shown=12;let filtered=[];
    function render() {
      const text=(search.value||'').toLowerCase().trim();
      filtered=data.all.filter(c => {
        let inCollection=collection.value==='All' || (collection.value==='C-DIT' && c.collection==='C-DIT reference') ||
          (collection.value==='Tally' && (c.collection==='Tally Education reference' || /tally/i.test(c.name)));
        const duration=(c.duration||'').toLowerCase();
        const filterDuration=length.value==='All'||(length.value==='Short'&&(duration.includes('hours')||duration.includes('1 month')||duration.includes('2 month')))
          ||(length.value==='Medium'&&duration.includes('3 month'))||(length.value==='Long'&&(duration.includes('6 month')||duration.includes('year')));
        return inCollection && filterDuration && (category.value==='All'||c.category===category.value) && (!text || `${c.name} ${c.description} ${c.code||''} ${c.category}`.toLowerCase().includes(text));
      });
      root.innerHTML=filtered.slice(0,shown).map(card).join('')||emptyState();
      count.textContent=`${filtered.length} ${filtered.length===1?'course':'courses'} found`;
      more.hidden=filtered.length<=shown;
    }
    for(const el of [search,category,length,collection])el.addEventListener(el===search?'input':'change',()=>{shown=12;render();});
    if(more)more.addEventListener('click',()=>{shown+=12;render();});
    document.addEventListener('click',e=>{if(e.target.closest('[data-reset-courses]')){search.value='';category.value='All';length.value='All';collection.value='All';shown=12;render();}});
    render();
  }
  const groups=[
    {name:'Diploma & Advanced Diploma Courses',range:[1,13],id:'diplomas',intro:'Programmes in computer applications, hardware, office productivity and financial management.'},
    {name:'Certificate Courses',range:[14,30],id:'certificates',intro:'Focused courses in practical computer applications, accounting, programming and technical skills.'},
    {name:'AI & Emerging Technology',range:[31,39],id:'artificial-intelligence',intro:'AI tools, data analytics, machine learning and modern digital productivity.'},
    {name:'Digital Marketing',range:[40,40],id:'digital-marketing',intro:'An introduction to promoting products, services and organisations online.'},
    {name:'IT Applications & Tally',range:[41,48],id:'it-and-tally',intro:'Digital literacy and accounting-related courses using Tally.'}
  ];
  function initCdit() {
    const root=document.getElementById('cditGroups');if(!root)return;
    const search=document.getElementById('cditSearch');
    const counter=document.getElementById('cditCount');
    function render(){
      const q=search.value.toLowerCase().trim();let total=0;
      root.innerHTML=groups.map(g=>{
        const courses=data.cdit.filter(c=>c.no>=g.range[0]&&c.no<=g.range[1]&&(!q||`${c.name} ${c.description} ${c.code||''}`.toLowerCase().includes(q)));
        total+=courses.length;
        if(!courses.length)return '';
        return `<section class="catalog-section" id="${g.id}"><div class="catalog-heading"><div><h2>${g.name}</h2><p>${g.intro}</p></div><span class="cat-count">${courses.length} ${courses.length===1?'course':'courses'}</span></div><div class="course-grid">${courses.map(card).join('')}</div></section>`;
      }).join('')||emptyState();
      if(counter)counter.textContent=`Showing ${total} of ${data.cdit.length} C-DIT reference courses`;
    }
    search.addEventListener('input',render);
    document.addEventListener('click',e=>{if(e.target.closest('[data-reset-courses]')){search.value='';render();}});
    render();
  }
  function initTally() {
    const root=document.getElementById('tallyResults');if(root)root.innerHTML=data.tally.map(card).join('');
  }
  function initFeatured(){
    const root=document.getElementById('featuredCourses');if(!root)return;
    const no=[4,1,24,36,28];
    const curated=no.map(n=>data.cdit.find(c=>c.no===n)).filter(Boolean);
    curated.push(data.tally[0]);
    root.innerHTML=curated.map(card).join('');
  }
  function initForm() {
    const form=document.getElementById('enquiryForm'); if(!form)return;
    const courseSelect=document.getElementById('courseInterest');
    if(courseSelect){
      const sorted=[...data.all].sort((a,b)=>a.name.localeCompare(b.name));
      courseSelect.innerHTML='<option value="">Select a course (optional)</option>'+sorted.map(c=>`<option value="${escapeHTML(c.name)}">${escapeHTML(c.name)}</option>`).join('')+'<option value="Not sure yet">Not sure yet — need guidance</option>';
      const selected=new URLSearchParams(location.search).get('course');
      if(selected){let value=[...courseSelect.options].find(o=>o.value.toLowerCase()===selected.toLowerCase());
        if(!value){const matches=[...courseSelect.options].filter(o=>o.value.toLowerCase().includes(selected.toLowerCase()));value=matches[0];}
        if(value)courseSelect.value=value.value;
      }
    }
    form.addEventListener('submit',event=>{
      event.preventDefault();if(!form.reportValidity())return;
      const name=document.getElementById('visitorName').value.trim();
      const phone=document.getElementById('visitorPhone').value.trim();
      const interest=courseSelect.value||'Course guidance requested';
      const message=document.getElementById('visitorMessage').value.trim();
      const text=`Hello MGIT Computer Education, I would like to enquire about your courses.\n\nName: ${name}\nPhone: ${phone}\nCourse: ${interest}\nMessage: ${message||'Please share course details, fees and next batch information.'}`;
      const link=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
      const a=document.createElement('a');a.href=link;a.target='_blank';a.rel='noopener noreferrer';a.click();
      const notice=document.getElementById('formNotice'); if(notice){notice.textContent='WhatsApp should open with a prepared message. Please review it and tap Send in WhatsApp to complete your enquiry.';notice.classList.add('visible');}
    });
  }
  function initNav(){
    const btn=document.getElementById('mobileToggle');const nav=document.getElementById('mobileNav');
    if(btn&&nav){btn.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close navigation':'Open navigation');btn.innerHTML=icon(open?'close':'layers');});}
    document.addEventListener('scroll',()=>document.querySelector('.site-header')?.classList.toggle('scrolled',scrollY>8),{passive:true});
  }
  function initGallery(){
    const gallery=document.querySelector('[data-gallery]');if(!gallery)return;
    const slides=[...gallery.querySelectorAll('.gallery-slide')],dots=[...gallery.querySelectorAll('.gallery-dot')];let current=0,timer;
    const show=index=>{current=(index+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('is-active',i===current));dots.forEach((d,i)=>{d.classList.toggle('is-active',i===current);d.setAttribute('aria-selected',String(i===current));});};
    const start=()=>{clearInterval(timer);timer=setInterval(()=>show(current+1),3000);};
    dots.forEach((dot,i)=>dot.addEventListener('click',()=>{show(i);start();}));
    gallery.addEventListener('mouseenter',()=>clearInterval(timer));gallery.addEventListener('mouseleave',start);show(0);start();
  }
  function initGlobalModal(){
    document.addEventListener('click',e=>{
      const trigger=e.target.closest('[data-open-course]');if(trigger){openCourse(trigger.dataset.openCourse,trigger);return;}
      if(e.target.closest('[data-close-modal]'))closeCourse();
      if(e.target.id==='courseModal')closeCourse();
    });
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCourse();if(e.key==='Tab'){
      const modal=document.getElementById('courseModal');if(!modal?.classList.contains('open'))return;
      const tabbable=[...modal.querySelectorAll('a[href],button:not([disabled])')];if(!tabbable.length)return;
      const first=tabbable[0],last=tabbable[tabbable.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }});
  }
  document.addEventListener('DOMContentLoaded',()=>{
    initNav();initGlobalModal();initFeatured();initCourses();initCdit();initTally();initForm();initGallery();
    const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  });
})();
