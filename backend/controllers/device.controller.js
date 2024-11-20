import * as deviceService from '../services/device.service.js';
import logger from '../utils/logger.js';

export const getDevicesForUser = async (req, res, next) => {
   try {
      const devices = await deviceService.getDevicesByUserId(req.user.id);
      logger.info(`Retrieved devices for user: ${req.user.id}`);
      res.json(devices);
   } catch (error) {
      logger.error(`Failed to retrieve devices: ${error.message}`);
      next({ status: 500, message: 'Failed to retrieve devices', originalError: error });
   }
};

export const removeDevice = async (req, res, next) => {
   const { deviceId } = req.params;
   try {
      await deviceService.deleteDevice(deviceId, req.user.id);
      logger.info(`Device removed: ${deviceId}`);
      res.json({ message: 'Device removed' });
   } catch (error) {
      logger.error(`Failed to remove device: ${error.message}`);
      next({ status: 500, message: 'Failed to remove device', originalError: error });
   }
};