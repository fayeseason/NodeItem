//��½�����ִ�е�·��
module.exports.checkLogin = function (req,res,next) {
    if (req.session.user) {
        next();
    } else {
        req.flash('error','��ǰ·��ֻ�����û���½�����ִ�У����ȵ�¼');
        res.redirect('/user/login');
    }
};

//δ��¼�����ִ�е�·��
module.exports.checkNotLogin = function (req,res,next) {
    if (req.session.user) {
        req.flash("error","��ǰ·��ֻ�����û�δ��¼��ʱ����ܷ��ʣ������˳�");
        res.redirect("/");
    } else {
        next();
    }
}
