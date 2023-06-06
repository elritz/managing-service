/* eslint-disable */
import type { Prisma, PushToken, Device, DeviceManager, DeviceProfile, RefreshToken } from "/Users/christianfirmi/Desktop/4/Github/managing/node_modules/.pnpm/@prisma+client@4.12.0_prisma@4.12.0/node_modules/@prisma/client";
export default interface PrismaTypes {
    PushToken: {
        Name: "PushToken";
        Shape: PushToken;
        Include: Prisma.PushTokenInclude;
        Select: Prisma.PushTokenSelect;
        OrderBy: Prisma.PushTokenOrderByWithRelationInput;
        WhereUnique: Prisma.PushTokenWhereUniqueInput;
        Where: Prisma.PushTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: "Device";
        ListRelations: never;
        Relations: {
            Device: {
                Shape: Device | null;
                Name: "Device";
            };
        };
    };
    Device: {
        Name: "Device";
        Shape: Device;
        Include: Prisma.DeviceInclude;
        Select: Prisma.DeviceSelect;
        OrderBy: Prisma.DeviceOrderByWithRelationInput;
        WhereUnique: Prisma.DeviceWhereUniqueInput;
        Where: Prisma.DeviceWhereInput;
        Create: {};
        Update: {};
        RelationName: "DeviceManager" | "PushToken";
        ListRelations: never;
        Relations: {
            DeviceManager: {
                Shape: DeviceManager;
                Name: "DeviceManager";
            };
            PushToken: {
                Shape: PushToken | null;
                Name: "PushToken";
            };
        };
    };
    DeviceManager: {
        Name: "DeviceManager";
        Shape: DeviceManager;
        Include: Prisma.DeviceManagerInclude;
        Select: Prisma.DeviceManagerSelect;
        OrderBy: Prisma.DeviceManagerOrderByWithRelationInput;
        WhereUnique: Prisma.DeviceManagerWhereUniqueInput;
        Where: Prisma.DeviceManagerWhereInput;
        Create: {};
        Update: {};
        RelationName: "Device" | "DeviceProfile";
        ListRelations: "DeviceProfile";
        Relations: {
            Device: {
                Shape: Device | null;
                Name: "Device";
            };
            DeviceProfile: {
                Shape: DeviceProfile[];
                Name: "DeviceProfile";
            };
        };
    };
    DeviceProfile: {
        Name: "DeviceProfile";
        Shape: DeviceProfile;
        Include: Prisma.DeviceProfileInclude;
        Select: Prisma.DeviceProfileSelect;
        OrderBy: Prisma.DeviceProfileOrderByWithRelationInput;
        WhereUnique: Prisma.DeviceProfileWhereUniqueInput;
        Where: Prisma.DeviceProfileWhereInput;
        Create: {};
        Update: {};
        RelationName: "DeviceManager" | "RefreshToken";
        ListRelations: never;
        Relations: {
            DeviceManager: {
                Shape: DeviceManager;
                Name: "DeviceManager";
            };
            RefreshToken: {
                Shape: RefreshToken | null;
                Name: "RefreshToken";
            };
        };
    };
    RefreshToken: {
        Name: "RefreshToken";
        Shape: RefreshToken;
        Include: Prisma.RefreshTokenInclude;
        Select: Prisma.RefreshTokenSelect;
        OrderBy: Prisma.RefreshTokenOrderByWithRelationInput;
        WhereUnique: Prisma.RefreshTokenWhereUniqueInput;
        Where: Prisma.RefreshTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: "DeviceProfile";
        ListRelations: never;
        Relations: {
            DeviceProfile: {
                Shape: DeviceProfile | null;
                Name: "DeviceProfile";
            };
        };
    };
}