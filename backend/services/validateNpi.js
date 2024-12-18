const axios = require("axios");

module.exports = {
  validateNpi: async function (npiNumber) {
    try {
      const response = await axios.get(
        `https://npiregistry.cms.hhs.gov/api/?number=${npiNumber}&version=2.1`
      );
      if (response.status !== 200) {
        throw new Error("NPI validation failed: Failed to fetch API data");
      }

      const data = response.data;

      if (data.results_count < 1) {
        throw new Error("NPI validation failed: clinician not found");
      }
      return data;
    } catch (error) {
      throw new Error("NPI validation failed: " + error.message);
    }
  },
};
