module.exports = mongoose => {
    const Restaurant = mongoose.model(
        "restaurant",
        mongoose.Schema(
            {
                name: String,
                location: String,
                contact: String,
                cuisine_type: String,
                image_path: String,
                description: String,
            },
            { timestamps: true }
        )
    );

    return Restaurant;
};