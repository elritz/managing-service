import sendNotifications from '@src/helpers/pushnotifciations/expo/SendExpoPushNotifications'
import prismaClient from '../../../src/server/PrismaClient'

export default async function ManagerSendPushNotification(
  call: any,
  callback: any,
) {
  const { profileIds, title, body, subtitle, jsondata } = call.request

  profileIds.map(async (item) => {
    const findDevicesWithArgProfileIds =
      await prismaClient.deviceProfile.findMany({
        where: {
          profileId: item,
          isActive: true,
        },
        include: {
          DeviceManager: {
            include: {
              Device: {
                include: {
                  PushToken: true,
                },
              },
            },
          },
        },
      })

    const removeIfNoToken = findDevicesWithArgProfileIds.filter((item) => {
      if (!item.DeviceManager.Device?.PushToken) {
        return
      }
      return item
    })

    const tokens = removeIfNoToken.flatMap(
      (item) => item.DeviceManager.Device?.PushToken?.expoToken,
    )

    if (tokens.length) {
      sendNotifications({
        notifications: [
          {
            to: String(tokens),
            title: title || 'Barfriends',
            subtitle: subtitle,
            body: body,
            data: JSON.parse(jsondata),
          },
        ],
      })
    }
  })

  // find the Device with the profilepush notifciation tokens
  callback(null, {
    success: true,
  })
}
