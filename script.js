// viewport(device width responsive)↓

// Get all navigation links
const navLinks = document.querySelectorAll('nav-links a');
const sideBar = document.querySelectorAll('sidebar');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); 
        const targetId = e.currentTarget.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 

        // Scroll to the target section
        targetSection.scrollIntoView({

        });
    });
});

// sidebar control & animation
//open sidebar
function openside() {
    const sidebar = document.getElementById('sidebar'); 
    if (sidebar.style.width === '300px') { //turn side bar from 0 px to 250px
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '300px';
    }
  }
  //close sidebar
  function closeside() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '0px') { 
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '0px';
    }
  }

  function togglePanel(panelId) {
    const panel = document.getElementById(panelId); 
    const panelLinks = panel.querySelectorAll('a'); 
  
    if (panel.style.display === 'block') { 
      panel.style.display = 'none';
    } else { 
      const panels = document.querySelectorAll('.panelshow'); 
      panels.forEach(p => { 
        p.style.display = 'none';
      });
      panel.style.display = 'block'; 
  
    
      panelLinks.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault(); 
         
          console.log('Link clicked:', link.textContent);
        });
      });
    }
  }

//snippet copy functions(button)
function copyToClipboard(snippetId) {
    const textToCopy = document.getElementById(snippetId).innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard');
            alert('copied');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('failed to copy');
        });
}