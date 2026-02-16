import Profile from "../models/profile.model.js";

export const createOrUpdateProfile = async (req, res) => {
  try {

    // find existing profile
    let profile = await Profile.findOne();

    if (profile) {
      // UPDATE existing
      profile = await Profile.findByIdAndUpdate(
        profile._id,
        req.body,
        { new: true } // return updated document
      );
    } else {
      // CREATE new
      profile = await Profile.create(req.body);
    }

    res.json({ success: true, data: profile });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
