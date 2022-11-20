const User = require('./User');
const Ticket = require('./Ticket');

Ticket.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = {
    User,
    Ticket
};
