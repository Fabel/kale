var Wish = {
    emit(name, data){
        Socket.send({wish: name, data: data});
    }
}

module.exports = Wish;
