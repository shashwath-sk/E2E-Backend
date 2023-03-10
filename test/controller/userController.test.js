const userController = require("../../src/controllers/contentController");
const userServices = require("../../src/services/contentServices");
describe("User Controller", () => {
  describe("add content", () => {
    it("should add content", async () => {
      const req = {
        body: {
          name: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.addContent = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.addContentController(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("add fields", () => {
    it("should add fields", async () => {
      const req = {
        params: {
          Id: "1",
        },
        body: {
          newField: "newField",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.addNewContentField = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.addContentFieldController(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("update content", () => {
    it("should update content", async () => {
      const req = {
        params: {
          Id: "1",
        },
        body: {
            name: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.updateContentName = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.updateContentNameController(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("get contents", () => {
    it("should get contents", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.getContents = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.getContentsController(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("update content field", () => {
    it("should update content field", async () => {
      const req = {
        params: {
          Id: "1",
        },
        body: {
            changeField: "field",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.updateContentField = jest
        .fn()
        .mockResolvedValue({ _id: "1" });
      await userController.updateContentFieldController(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("delete content field", () => {
    it("should delete content field", async () => {
      const req = {
        params: {
          Id: "1",
        },
        body: {
            delField: "field",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.deleteContentField = jest
        .fn()
        .mockResolvedValue({ _id: "1" });
      await userController.deleteContentFieldController(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("get content by id", () => {
    it("should get content by id", async () => {
      const req = {
        params: {
          Id: "1",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.getContent = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.getContentController(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });

  describe("get content entries by id", () => {
    it("should get content entries by id", async () => {
      const req = {
        params: {
          Id: "1",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.getContentEntries = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.getContentEntriesController(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  }
    );

    describe("add content entry", () => {
        it("should add content entry", async () => {
          const req = {
            params: {
              Id: "1",
            },
            body: {
                newEntry: "entry",
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
          };
          userServices.addContentEntries = jest.fn().mockResolvedValue({ _id: "1" });
          await userController.addContentEntriesController(req, res);
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.json).toHaveBeenCalledWith({ _id: "1" });
        });
      }
        );

    describe('update content entry', () => {
        it("should update content entry", async () => {
          const req = {
            params: {
              Id: "1",
            },
            body: {
                newEntry: "entry",
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
          };
          userServices.updateContentEntries = jest.fn().mockResolvedValue({ _id: "1" });
          await userController.updateContentEntriesController(req, res);
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.json).toHaveBeenCalledWith({ _id: "1" });
        });
      }
        );
});