module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define("Note", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    tags: DataTypes.STRING,
    synced: DataTypes.BOOLEAN
  });

  Note.associate = models => {
    Note.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: "user_id"
    });
  };

  return Note;
};
