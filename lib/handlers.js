exports.notFound = (req,res) => res.render('404_page');
exports.serverError = (err,req,res,next) => res.render('500_page');
exports.home = (err,res) => res.render('home');