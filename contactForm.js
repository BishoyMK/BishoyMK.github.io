document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  if (!form) return;

  // Create status message element
  let statusMessage = document.createElement('div');
  statusMessage.className = 'status-message';
  form.appendChild(statusMessage);

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    statusMessage.textContent = '';
    statusMessage.className = 'status-message';

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        statusMessage.textContent = ' Your message was sent successfully. I\'ll reply soon. Thank you ';
        statusMessage.classList.add('success');
        form.reset();
      } else {
        const errorData = await response.json();
        statusMessage.textContent = errorData.error || 'Failed to send message. Please try again.';
        statusMessage.classList.add('error');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      statusMessage.textContent = 'Network error. Please try again later.';
      statusMessage.classList.add('error');
    } finally {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
}); 