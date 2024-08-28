// Handle Notification Popup
document.getElementById('notification-icon').addEventListener('click', function() {
    document.getElementById('notification-popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('notification-popup').style.display = 'none';
});

// Fetch Notifications from JSON file
fetch('https://raw.githubusercontent.com/TecnoDeVolper2008/testsss/main/nofifi.json') // Update URL if necessary
    .then(response => response.json())
    .then(data => {
        const notificationContent = document.getElementById('notification-content');
        if (data && Array.isArray(data.notifications)) {
            notificationContent.innerHTML = ''; // Clear previous content
            data.notifications.forEach(notification => {
                const div = document.createElement('div');
                div.className = 'notification-item';
                
                if (notification.image) {
                    const img = document.createElement('img');
                    img.src = notification.image;
                    div.appendChild(img);
                }
                
                if (notification.text) {
                    const text = document.createElement('p');
                    text.textContent = notification.text;
                    div.appendChild(text);
                }
                
                if (notification.buttons && Array.isArray(notification.buttons)) {
                    const buttonsDiv = document.createElement('div');
                    buttonsDiv.className = 'buttons';
                    notification.buttons.forEach(button => {
                        const a = document.createElement('a');
                        a.href = button.url || '#';
                        a.textContent = button.text || 'Button';
                        buttonsDiv.appendChild(a);
                    });
                    div.appendChild(buttonsDiv);
                }
                
                notificationContent.appendChild(div);
            });
        } else {
            notificationContent.innerHTML = '<p>No notifications available.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching notifications:', error);
        document.getElementById('notification-content').innerHTML = '<p>Error loading notifications.</p>';
    });

// Fetch Video Blocks from JSON file
fetch('https://hela-notify-system.netlify.app/video-blocks.json') // Update URL if necessary
    .then(response => response.json())
    .then(data => {
        const videoBlocksContainer = document.getElementById('video-blocks');
        if (data && Array.isArray(data.videos)) {
            videoBlocksContainer.innerHTML = ''; // Clear previous content
            data.videos.forEach(video => {
                const div = document.createElement('div');
                div.className = 'video-block';
                
                if (video.image) {
                    const img = document.createElement('img');
                    img.src = video.image;
                    div.appendChild(img);
                }
                
                if (video.title) {
                    const title = document.createElement('div');
                    title.className = 'title';
                    title.textContent = video.title;
                    div.appendChild(title);
                }
                
                if (video.caption) {
                    const caption = document.createElement('div');
                    caption.className = 'caption';
                    caption.textContent = video.caption;
                    div.appendChild(caption);
                }
                
                videoBlocksContainer.appendChild(div);
            });
        } else {
            videoBlocksContainer.innerHTML = '<p>No video blocks available.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching video blocks:', error);
        document.getElementById('video-blocks').innerHTML = '<p>Error loading video blocks.</p>';
    });
