document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '1111' && password === '1111') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'flex'; // 显示主界面并应用flex布局
        document.body.style.display = 'block'; // 将body的样式恢复为标准块布局
        document.body.style.alignItems = 'initial'; // 取消居中对齐
        document.body.style.justifyContent = 'initial'; // 取消居中对齐
    } else {
        alert('用户名或密码错误，请使用默认用户名：user 和密码：password');
    }
});


document.getElementById('add').addEventListener('click', function() {
    alert('添加新的朋友！');
});

document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        alert('搜索: ' + e.target.value);
    }
});

const buttons = document.querySelectorAll('nav button');
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (btn.id === 'contacts') {
            document.querySelector('main').innerHTML = `
                <div class="profile">
                    <img src="avatar.jpg" alt="Profile Image">
                    <div class="info">
                        <h2>ByteMaster</h2>
                        <p>见习魔法士</p>
                    </div>
                </div>
            `;
        } else {
            document.querySelector('main').innerHTML = '<p>页面内容待定</p>';
        }
    });
});
