let views = 0;

export const getUsers = (req, res) => {
    const users = "<ul><li>John Doe</li><li>Jane Doe</li></ul>"
    res.send(users);
}

export const getViews = (req, res) => {
    const rnd = Math.floor(Math.random() * 10);
    views+=rnd;
    res.send(`Views: ${views}`);
}

export const getWithDelay = (req, res) => {
    setTimeout(() => {
        res.send('This is a delayed response');
    }, 3000);
}

export const getUsersNoList = (req, res) => {
    const users = "<li>John Doe</li><li>Jane Doe</li>"
    res.send(users);
}

export const validateEmail = (req, res) => {
    const email = req.body.email;
    if(email.includes('@')){
        res.send('Valid email');
    } else {
        res.send('Invalid email');
    }
}

export const div1 = (req, res) => {
    res.send('<div id="div1" class="red">New content</div>');
}

export const boost = (req, res) => {
    res.send('Boosted🔥');
}