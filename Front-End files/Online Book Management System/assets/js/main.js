document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)
        
        // Validate that all variables exist
        if(toggle && nav && bodypd && headerpd){
            toggle.addEventListener('click', ()=>{
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE & CONTENT SWITCH =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    const contentSections = document.querySelectorAll('.content-section')
    
    function colorLink(){
        if(linkColor){
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
            
            // Handle content switching
            const targetId = this.getAttribute('data-target')
            if(targetId) {
                contentSections.forEach(section => {
                    section.classList.remove('active')
                })
                document.getElementById(targetId).classList.add('active')
            }
        }
    }
    
    linkColor.forEach(l => l.addEventListener('click', colorLink))
    
    // Add simple interactivity (e.g., delete row simulation)
    const deleteButtons = document.querySelectorAll('.btn-outline-danger, .btn-danger, .text-danger');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if(confirm('Are you sure you want to remove this item?')) {
                const tr = this.closest('tr');
                if(tr) tr.remove();
                
                const li = this.closest('li');
                if(li) li.remove();
                
                const badge = this.closest('.badge');
                if(badge) badge.remove();
            }
        });
    });

    // Tooltips initialization if any
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
