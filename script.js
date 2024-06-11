document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 简化的登录验证：仅允许两个固定账号登录
    if ((username === '11111' && password === '11111') || (username === '22222' && password === '22222')) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'flex';
    } else {
        alert('用户名或密码错误！');
    }
});

// 添加导航栏的点击事件处理
document.getElementById('contacts').addEventListener('click', function() {
    displayPage('contacts');
});
document.getElementById('chats').addEventListener('click', function() {
    displayPage('chats');
});
document.getElementById('settings').addEventListener('click', function() {
    displayPage('settings');
});

function updateHeaderTitle(title) {
    document.querySelector('header').firstChild.nodeValue = title;
}

// 然后在 displayPage 中调用这个函数
function displayPage(page) {
    // 隐藏所有特定页面元素
    document.getElementById('searchBox').style.display = 'none';
    document.getElementById('contactsPage').style.display = 'none';
    document.getElementById('chatArea').style.display = 'none';
    document.getElementById('addContact').style.display = 'none';
    // 取消所有导航项的选中状态
    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.classList.remove('selected');
    });

    if (page === 'contacts') {
        document.getElementById('searchBox').style.display = 'block';
        document.getElementById('contactsPage').style.display = 'block';
        document.getElementById('addContact').style.display = 'block';
        updateHeaderTitle('');  // 设置标题为空
        document.getElementById('contacts').classList.add('selected');
    } else if (page === 'chats') {
        document.getElementById('chatArea').style.display = 'block';
        updateHeaderTitle('我的聊天应用');  // 继续显示这个标题
        document.getElementById('chats').classList.add('selected');
    } else if (page === 'settings') {
        updateHeaderTitle('设置');  // 显示设置标题
        document.getElementById('settings').classList.add('selected');
    }
}
