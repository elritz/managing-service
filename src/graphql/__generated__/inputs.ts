// @ts-nocheck
import { Prisma } from '.prisma/client';
import builder from '@builder';

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
    ? Filters[F]
    : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>
};

export const DateTime = builder.scalarType('DateTime', {
  parseValue: (value) => {
    const isDateParsable = typeof value === 'string' || typeof value === 'number';
    if (!isDateParsable) throw new Error('Invalid Date type');
    const date = new Date(value);
    const isInvalidDate = date.toString() === 'Invalid Date';
    if (isInvalidDate) throw new Error('Invalid Date');
    return new Date(value);
  },
  serialize: (value) => value ? new Date(value) : null,
});

export const Json = builder.scalarType('Json', {
  serialize: (value) => value,
});

export const DeviceManagerScalarFieldEnum = builder.enumType('DeviceManagerScalarFieldEnum', {
  values: ["id","createdAt","updatedAt"] as const,
});

export const DeviceProfileScalarFieldEnum = builder.enumType('DeviceProfileScalarFieldEnum', {
  values: ["id","AppType","ProfileType","profileId","isActive","accesstoken","deviceManagerId","createdAt","updatedAt"] as const,
});

export const DeviceScalarFieldEnum = builder.enumType('DeviceScalarFieldEnum', {
  values: ["id","deviceType","deviceManagerId","pushTokenId","createdAt","updatedAt"] as const,
});

export const PushTokenScalarFieldEnum = builder.enumType('PushTokenScalarFieldEnum', {
  values: ["id","isExpired","expoToken","androidToken","appleToken","receipts","createdAt","updatedAt"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const RefreshTokenScalarFieldEnum = builder.enumType('RefreshTokenScalarFieldEnum', {
  values: ["id","token","DeviceProfileId","createdAt","updatedAt"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"] as const,
});

export const AppType = builder.enumType('AppType', {
  values: ["BARFRIENDS","PETFRIENDS"] as const,
});

export const ProfileType = builder.enumType('ProfileType', {
  values: ["PERSONAL","VENUE","GUEST"] as const,
});

export const PushTokenWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[PushTokenWhereInput]}),
  OR: t.field({"required":false,"type":[PushTokenWhereInput]}),
  NOT: t.field({"required":false,"type":[PushTokenWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  isExpired: t.field({"required":false,"type":BoolFilter}),
  expoToken: t.field({"required":false,"type":StringNullableFilter}),
  androidToken: t.field({"required":false,"type":StringNullableFilter}),
  appleToken: t.field({"required":false,"type":StringNullableFilter}),
  receipts: t.field({"required":false,"type":JsonNullableListFilter}),
  createdAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  Device: t.field({"required":false,"type":DeviceWhereInput}),
});
export const PushTokenWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenWhereInput>>('PushTokenWhereInput').implement({
  fields: PushTokenWhereInputFields,
});

export const PushTokenOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  isExpired: t.field({"required":false,"type":SortOrder}),
  expoToken: t.field({"required":false,"type":SortOrder}),
  androidToken: t.field({"required":false,"type":SortOrder}),
  appleToken: t.field({"required":false,"type":SortOrder}),
  receipts: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  Device: t.field({"required":false,"type":DeviceOrderByWithRelationInput}),
});
export const PushTokenOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenOrderByWithRelationInput>>('PushTokenOrderByWithRelationInput').implement({
  fields: PushTokenOrderByWithRelationInputFields,
});

export const PushTokenWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
});
export const PushTokenWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenWhereUniqueInput>>('PushTokenWhereUniqueInput').implement({
  fields: PushTokenWhereUniqueInputFields,
});

export const PushTokenOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  isExpired: t.field({"required":false,"type":SortOrder}),
  expoToken: t.field({"required":false,"type":SortOrder}),
  androidToken: t.field({"required":false,"type":SortOrder}),
  appleToken: t.field({"required":false,"type":SortOrder}),
  receipts: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":PushTokenCountOrderByAggregateInput}),
  _max: t.field({"required":false,"type":PushTokenMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":PushTokenMinOrderByAggregateInput}),
});
export const PushTokenOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenOrderByWithAggregationInput>>('PushTokenOrderByWithAggregationInput').implement({
  fields: PushTokenOrderByWithAggregationInputFields,
});

export const PushTokenScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[PushTokenScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[PushTokenScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[PushTokenScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":StringWithAggregatesFilter}),
  isExpired: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  expoToken: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  androidToken: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  appleToken: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  receipts: t.field({"required":false,"type":JsonNullableListFilter}),
  createdAt: t.field({"required":false,"type":DateTimeNullableWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableWithAggregatesFilter}),
});
export const PushTokenScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenScalarWhereWithAggregatesInput>>('PushTokenScalarWhereWithAggregatesInput').implement({
  fields: PushTokenScalarWhereWithAggregatesInputFields,
});

export const DeviceWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[DeviceWhereInput]}),
  OR: t.field({"required":false,"type":[DeviceWhereInput]}),
  NOT: t.field({"required":false,"type":[DeviceWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  deviceType: t.field({"required":false,"type":StringNullableFilter}),
  deviceManagerId: t.field({"required":false,"type":StringFilter}),
  pushTokenId: t.field({"required":false,"type":StringNullableFilter}),
  createdAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  DeviceManager: t.field({"required":false,"type":DeviceManagerWhereInput}),
  PushToken: t.field({"required":false,"type":PushTokenWhereInput}),
});
export const DeviceWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceWhereInput>>('DeviceWhereInput').implement({
  fields: DeviceWhereInputFields,
});

export const DeviceOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  deviceType: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  pushTokenId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  DeviceManager: t.field({"required":false,"type":DeviceManagerOrderByWithRelationInput}),
  PushToken: t.field({"required":false,"type":PushTokenOrderByWithRelationInput}),
});
export const DeviceOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceOrderByWithRelationInput>>('DeviceOrderByWithRelationInput').implement({
  fields: DeviceOrderByWithRelationInputFields,
});

export const DeviceWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  deviceManagerId: t.string({"required":false}),
  pushTokenId: t.string({"required":false}),
});
export const DeviceWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceWhereUniqueInput>>('DeviceWhereUniqueInput').implement({
  fields: DeviceWhereUniqueInputFields,
});

export const DeviceOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  deviceType: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  pushTokenId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":DeviceCountOrderByAggregateInput}),
  _max: t.field({"required":false,"type":DeviceMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":DeviceMinOrderByAggregateInput}),
});
export const DeviceOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceOrderByWithAggregationInput>>('DeviceOrderByWithAggregationInput').implement({
  fields: DeviceOrderByWithAggregationInputFields,
});

export const DeviceScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[DeviceScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[DeviceScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[DeviceScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":StringWithAggregatesFilter}),
  deviceType: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  deviceManagerId: t.field({"required":false,"type":StringWithAggregatesFilter}),
  pushTokenId: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeNullableWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableWithAggregatesFilter}),
});
export const DeviceScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceScalarWhereWithAggregatesInput>>('DeviceScalarWhereWithAggregatesInput').implement({
  fields: DeviceScalarWhereWithAggregatesInputFields,
});

export const DeviceManagerWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[DeviceManagerWhereInput]}),
  OR: t.field({"required":false,"type":[DeviceManagerWhereInput]}),
  NOT: t.field({"required":false,"type":[DeviceManagerWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  Device: t.field({"required":false,"type":DeviceWhereInput}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileListRelationFilter}),
});
export const DeviceManagerWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerWhereInput>>('DeviceManagerWhereInput').implement({
  fields: DeviceManagerWhereInputFields,
});

export const DeviceManagerOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  Device: t.field({"required":false,"type":DeviceOrderByWithRelationInput}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileOrderByRelationAggregateInput}),
});
export const DeviceManagerOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerOrderByWithRelationInput>>('DeviceManagerOrderByWithRelationInput').implement({
  fields: DeviceManagerOrderByWithRelationInputFields,
});

export const DeviceManagerWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
});
export const DeviceManagerWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerWhereUniqueInput>>('DeviceManagerWhereUniqueInput').implement({
  fields: DeviceManagerWhereUniqueInputFields,
});

export const DeviceManagerOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":DeviceManagerCountOrderByAggregateInput}),
  _max: t.field({"required":false,"type":DeviceManagerMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":DeviceManagerMinOrderByAggregateInput}),
});
export const DeviceManagerOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerOrderByWithAggregationInput>>('DeviceManagerOrderByWithAggregationInput').implement({
  fields: DeviceManagerOrderByWithAggregationInputFields,
});

export const DeviceManagerScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[DeviceManagerScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[DeviceManagerScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[DeviceManagerScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":StringWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
});
export const DeviceManagerScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerScalarWhereWithAggregatesInput>>('DeviceManagerScalarWhereWithAggregatesInput').implement({
  fields: DeviceManagerScalarWhereWithAggregatesInputFields,
});

export const DeviceProfileWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[DeviceProfileWhereInput]}),
  OR: t.field({"required":false,"type":[DeviceProfileWhereInput]}),
  NOT: t.field({"required":false,"type":[DeviceProfileWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  AppType: t.field({"required":false,"type":EnumAppTypeNullableFilter}),
  ProfileType: t.field({"required":false,"type":EnumProfileTypeNullableFilter}),
  profileId: t.field({"required":false,"type":StringNullableFilter}),
  isActive: t.field({"required":false,"type":BoolFilter}),
  accesstoken: t.field({"required":false,"type":StringNullableFilter}),
  deviceManagerId: t.field({"required":false,"type":StringFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  DeviceManager: t.field({"required":false,"type":DeviceManagerWhereInput}),
  RefreshToken: t.field({"required":false,"type":RefreshTokenWhereInput}),
});
export const DeviceProfileWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileWhereInput>>('DeviceProfileWhereInput').implement({
  fields: DeviceProfileWhereInputFields,
});

export const DeviceProfileOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  AppType: t.field({"required":false,"type":SortOrder}),
  ProfileType: t.field({"required":false,"type":SortOrder}),
  profileId: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  accesstoken: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  DeviceManager: t.field({"required":false,"type":DeviceManagerOrderByWithRelationInput}),
  RefreshToken: t.field({"required":false,"type":RefreshTokenOrderByWithRelationInput}),
});
export const DeviceProfileOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileOrderByWithRelationInput>>('DeviceProfileOrderByWithRelationInput').implement({
  fields: DeviceProfileOrderByWithRelationInputFields,
});

export const DeviceProfileWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
});
export const DeviceProfileWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileWhereUniqueInput>>('DeviceProfileWhereUniqueInput').implement({
  fields: DeviceProfileWhereUniqueInputFields,
});

export const DeviceProfileOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  AppType: t.field({"required":false,"type":SortOrder}),
  ProfileType: t.field({"required":false,"type":SortOrder}),
  profileId: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  accesstoken: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":DeviceProfileCountOrderByAggregateInput}),
  _max: t.field({"required":false,"type":DeviceProfileMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":DeviceProfileMinOrderByAggregateInput}),
});
export const DeviceProfileOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileOrderByWithAggregationInput>>('DeviceProfileOrderByWithAggregationInput').implement({
  fields: DeviceProfileOrderByWithAggregationInputFields,
});

export const DeviceProfileScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[DeviceProfileScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[DeviceProfileScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[DeviceProfileScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":StringWithAggregatesFilter}),
  AppType: t.field({"required":false,"type":EnumAppTypeNullableWithAggregatesFilter}),
  ProfileType: t.field({"required":false,"type":EnumProfileTypeNullableWithAggregatesFilter}),
  profileId: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  isActive: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  accesstoken: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  deviceManagerId: t.field({"required":false,"type":StringWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
});
export const DeviceProfileScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileScalarWhereWithAggregatesInput>>('DeviceProfileScalarWhereWithAggregatesInput').implement({
  fields: DeviceProfileScalarWhereWithAggregatesInputFields,
});

export const RefreshTokenWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RefreshTokenWhereInput]}),
  OR: t.field({"required":false,"type":[RefreshTokenWhereInput]}),
  NOT: t.field({"required":false,"type":[RefreshTokenWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  token: t.field({"required":false,"type":StringFilter}),
  DeviceProfileId: t.field({"required":false,"type":StringNullableFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileWhereInput}),
});
export const RefreshTokenWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenWhereInput>>('RefreshTokenWhereInput').implement({
  fields: RefreshTokenWhereInputFields,
});

export const RefreshTokenOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  token: t.field({"required":false,"type":SortOrder}),
  DeviceProfileId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileOrderByWithRelationInput}),
});
export const RefreshTokenOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenOrderByWithRelationInput>>('RefreshTokenOrderByWithRelationInput').implement({
  fields: RefreshTokenOrderByWithRelationInputFields,
});

export const RefreshTokenWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  token: t.string({"required":false}),
  DeviceProfileId: t.string({"required":false}),
});
export const RefreshTokenWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenWhereUniqueInput>>('RefreshTokenWhereUniqueInput').implement({
  fields: RefreshTokenWhereUniqueInputFields,
});

export const RefreshTokenOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  token: t.field({"required":false,"type":SortOrder}),
  DeviceProfileId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":RefreshTokenCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":RefreshTokenAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":RefreshTokenMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":RefreshTokenMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":RefreshTokenSumOrderByAggregateInput}),
});
export const RefreshTokenOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenOrderByWithAggregationInput>>('RefreshTokenOrderByWithAggregationInput').implement({
  fields: RefreshTokenOrderByWithAggregationInputFields,
});

export const RefreshTokenScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RefreshTokenScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[RefreshTokenScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[RefreshTokenScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  token: t.field({"required":false,"type":StringWithAggregatesFilter}),
  DeviceProfileId: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
});
export const RefreshTokenScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenScalarWhereWithAggregatesInput>>('RefreshTokenScalarWhereWithAggregatesInput').implement({
  fields: RefreshTokenScalarWhereWithAggregatesInputFields,
});

export const PushTokenCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  isExpired: t.boolean({"required":false}),
  expoToken: t.string({"required":false}),
  androidToken: t.string({"required":false}),
  appleToken: t.string({"required":false}),
  receipts: t.field({"required":false,"type":[Json]}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  Device: t.field({"required":false,"type":DeviceCreateNestedOneWithoutPushTokenInput}),
});
export const PushTokenCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenCreateInput>>('PushTokenCreateInput').implement({
  fields: PushTokenCreateInputFields,
});

export const PushTokenUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isExpired: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  expoToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  androidToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  appleToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  receipts: t.field({"required":false,"type":[Json]}),
  createdAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  Device: t.field({"required":false,"type":DeviceUpdateOneWithoutPushTokenNestedInput}),
});
export const PushTokenUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenUpdateInput>>('PushTokenUpdateInput').implement({
  fields: PushTokenUpdateInputFields,
});

export const PushTokenCreateManyInputFields = (t: any) => ({
  id: t.string({"required":false}),
  isExpired: t.boolean({"required":false}),
  expoToken: t.string({"required":false}),
  androidToken: t.string({"required":false}),
  appleToken: t.string({"required":false}),
  receipts: t.field({"required":false,"type":[Json]}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const PushTokenCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenCreateManyInput>>('PushTokenCreateManyInput').implement({
  fields: PushTokenCreateManyInputFields,
});

export const PushTokenUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isExpired: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  expoToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  androidToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  appleToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  receipts: t.field({"required":false,"type":[Json]}),
  createdAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const PushTokenUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenUpdateManyMutationInput>>('PushTokenUpdateManyMutationInput').implement({
  fields: PushTokenUpdateManyMutationInputFields,
});

export const DeviceCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  deviceType: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  DeviceManager: t.field({"required":true,"type":DeviceManagerCreateNestedOneWithoutDeviceInput}),
  PushToken: t.field({"required":false,"type":PushTokenCreateNestedOneWithoutDeviceInput}),
});
export const DeviceCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCreateInput>>('DeviceCreateInput').implement({
  fields: DeviceCreateInputFields,
});

export const DeviceUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  deviceType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  DeviceManager: t.field({"required":false,"type":DeviceManagerUpdateOneRequiredWithoutDeviceNestedInput}),
  PushToken: t.field({"required":false,"type":PushTokenUpdateOneWithoutDeviceNestedInput}),
});
export const DeviceUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceUpdateInput>>('DeviceUpdateInput').implement({
  fields: DeviceUpdateInputFields,
});

export const DeviceCreateManyInputFields = (t: any) => ({
  id: t.string({"required":false}),
  deviceType: t.string({"required":false}),
  deviceManagerId: t.string({"required":true}),
  pushTokenId: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const DeviceCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCreateManyInput>>('DeviceCreateManyInput').implement({
  fields: DeviceCreateManyInputFields,
});

export const DeviceUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  deviceType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const DeviceUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceUpdateManyMutationInput>>('DeviceUpdateManyMutationInput').implement({
  fields: DeviceUpdateManyMutationInputFields,
});

export const DeviceManagerCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  Device: t.field({"required":false,"type":DeviceCreateNestedOneWithoutDeviceManagerInput}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileCreateNestedManyWithoutDeviceManagerInput}),
});
export const DeviceManagerCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCreateInput>>('DeviceManagerCreateInput').implement({
  fields: DeviceManagerCreateInputFields,
});

export const DeviceManagerUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  Device: t.field({"required":false,"type":DeviceUpdateOneWithoutDeviceManagerNestedInput}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileUpdateManyWithoutDeviceManagerNestedInput}),
});
export const DeviceManagerUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerUpdateInput>>('DeviceManagerUpdateInput').implement({
  fields: DeviceManagerUpdateInputFields,
});

export const DeviceManagerCreateManyInputFields = (t: any) => ({
  id: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const DeviceManagerCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCreateManyInput>>('DeviceManagerCreateManyInput').implement({
  fields: DeviceManagerCreateManyInputFields,
});

export const DeviceManagerUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const DeviceManagerUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerUpdateManyMutationInput>>('DeviceManagerUpdateManyMutationInput').implement({
  fields: DeviceManagerUpdateManyMutationInputFields,
});

export const DeviceProfileCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AppType: t.field({"required":false,"type":AppType}),
  ProfileType: t.field({"required":false,"type":ProfileType}),
  profileId: t.string({"required":false}),
  isActive: t.boolean({"required":true}),
  accesstoken: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  DeviceManager: t.field({"required":true,"type":DeviceManagerCreateNestedOneWithoutDeviceProfileInput}),
  RefreshToken: t.field({"required":false,"type":RefreshTokenCreateNestedOneWithoutDeviceProfileInput}),
});
export const DeviceProfileCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateInput>>('DeviceProfileCreateInput').implement({
  fields: DeviceProfileCreateInputFields,
});

export const DeviceProfileUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  AppType: t.field({"required":false,"type":NullableEnumAppTypeFieldUpdateOperationsInput}),
  ProfileType: t.field({"required":false,"type":NullableEnumProfileTypeFieldUpdateOperationsInput}),
  profileId: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  accesstoken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  DeviceManager: t.field({"required":false,"type":DeviceManagerUpdateOneRequiredWithoutDeviceProfileNestedInput}),
  RefreshToken: t.field({"required":false,"type":RefreshTokenUpdateOneWithoutDeviceProfileNestedInput}),
});
export const DeviceProfileUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpdateInput>>('DeviceProfileUpdateInput').implement({
  fields: DeviceProfileUpdateInputFields,
});

export const DeviceProfileCreateManyInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AppType: t.field({"required":false,"type":AppType}),
  ProfileType: t.field({"required":false,"type":ProfileType}),
  profileId: t.string({"required":false}),
  isActive: t.boolean({"required":true}),
  accesstoken: t.string({"required":false}),
  deviceManagerId: t.string({"required":true}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const DeviceProfileCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateManyInput>>('DeviceProfileCreateManyInput').implement({
  fields: DeviceProfileCreateManyInputFields,
});

export const DeviceProfileUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  AppType: t.field({"required":false,"type":NullableEnumAppTypeFieldUpdateOperationsInput}),
  ProfileType: t.field({"required":false,"type":NullableEnumProfileTypeFieldUpdateOperationsInput}),
  profileId: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  accesstoken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const DeviceProfileUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpdateManyMutationInput>>('DeviceProfileUpdateManyMutationInput').implement({
  fields: DeviceProfileUpdateManyMutationInputFields,
});

export const RefreshTokenCreateInputFields = (t: any) => ({
  token: t.string({"required":true}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileCreateNestedOneWithoutRefreshTokenInput}),
});
export const RefreshTokenCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenCreateInput>>('RefreshTokenCreateInput').implement({
  fields: RefreshTokenCreateInputFields,
});

export const RefreshTokenUpdateInputFields = (t: any) => ({
  token: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileUpdateOneWithoutRefreshTokenNestedInput}),
});
export const RefreshTokenUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenUpdateInput>>('RefreshTokenUpdateInput').implement({
  fields: RefreshTokenUpdateInputFields,
});

export const RefreshTokenCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  token: t.string({"required":true}),
  DeviceProfileId: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const RefreshTokenCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenCreateManyInput>>('RefreshTokenCreateManyInput').implement({
  fields: RefreshTokenCreateManyInputFields,
});

export const RefreshTokenUpdateManyMutationInputFields = (t: any) => ({
  token: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const RefreshTokenUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenUpdateManyMutationInput>>('RefreshTokenUpdateManyMutationInput').implement({
  fields: RefreshTokenUpdateManyMutationInputFields,
});

export const StringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>>('StringFilter').implement({
  fields: StringFilterFields,
});

export const BoolFilterFields = (t: any) => ({
  equals: t.boolean({"required":false}),
  not: t.field({"required":false,"type":NestedBoolFilter}),
});
export const BoolFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BoolFilter>>('BoolFilter').implement({
  fields: BoolFilterFields,
});

export const StringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableFilter>>('StringNullableFilter').implement({
  fields: StringNullableFilterFields,
});

export const JsonNullableListFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":[Json]}),
  has: t.field({"required":false,"type":Json}),
  hasEvery: t.field({"required":false,"type":[Json]}),
  hasSome: t.field({"required":false,"type":[Json]}),
  isEmpty: t.boolean({"required":false}),
});
export const JsonNullableListFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.JsonNullableListFilter>>('JsonNullableListFilter').implement({
  fields: JsonNullableListFilterFields,
});

export const DateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const DateTimeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableFilter>>('DateTimeNullableFilter').implement({
  fields: DateTimeNullableFilterFields,
});

export const DeviceRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":DeviceWhereInput}),
  isNot: t.field({"required":false,"type":DeviceWhereInput}),
});
export const DeviceRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceRelationFilter>>('DeviceRelationFilter').implement({
  fields: DeviceRelationFilterFields,
});

export const PushTokenCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  isExpired: t.field({"required":false,"type":SortOrder}),
  expoToken: t.field({"required":false,"type":SortOrder}),
  androidToken: t.field({"required":false,"type":SortOrder}),
  appleToken: t.field({"required":false,"type":SortOrder}),
  receipts: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const PushTokenCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenCountOrderByAggregateInput>>('PushTokenCountOrderByAggregateInput').implement({
  fields: PushTokenCountOrderByAggregateInputFields,
});

export const PushTokenMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  isExpired: t.field({"required":false,"type":SortOrder}),
  expoToken: t.field({"required":false,"type":SortOrder}),
  androidToken: t.field({"required":false,"type":SortOrder}),
  appleToken: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const PushTokenMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenMaxOrderByAggregateInput>>('PushTokenMaxOrderByAggregateInput').implement({
  fields: PushTokenMaxOrderByAggregateInputFields,
});

export const PushTokenMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  isExpired: t.field({"required":false,"type":SortOrder}),
  expoToken: t.field({"required":false,"type":SortOrder}),
  androidToken: t.field({"required":false,"type":SortOrder}),
  appleToken: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const PushTokenMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenMinOrderByAggregateInput>>('PushTokenMinOrderByAggregateInput').implement({
  fields: PushTokenMinOrderByAggregateInputFields,
});

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>>('StringWithAggregatesFilter').implement({
  fields: StringWithAggregatesFilterFields,
});

export const BoolWithAggregatesFilterFields = (t: any) => ({
  equals: t.boolean({"required":false}),
  not: t.field({"required":false,"type":NestedBoolWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedBoolFilter}),
  _max: t.field({"required":false,"type":NestedBoolFilter}),
});
export const BoolWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BoolWithAggregatesFilter>>('BoolWithAggregatesFilter').implement({
  fields: BoolWithAggregatesFilterFields,
});

export const StringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableWithAggregatesFilter>>('StringNullableWithAggregatesFilter').implement({
  fields: StringNullableWithAggregatesFilterFields,
});

export const DateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const DateTimeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableWithAggregatesFilter>>('DateTimeNullableWithAggregatesFilter').implement({
  fields: DateTimeNullableWithAggregatesFilterFields,
});

export const DeviceManagerRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":DeviceManagerWhereInput}),
  isNot: t.field({"required":false,"type":DeviceManagerWhereInput}),
});
export const DeviceManagerRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerRelationFilter>>('DeviceManagerRelationFilter').implement({
  fields: DeviceManagerRelationFilterFields,
});

export const PushTokenRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":PushTokenWhereInput}),
  isNot: t.field({"required":false,"type":PushTokenWhereInput}),
});
export const PushTokenRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenRelationFilter>>('PushTokenRelationFilter').implement({
  fields: PushTokenRelationFilterFields,
});

export const DeviceCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  deviceType: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  pushTokenId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCountOrderByAggregateInput>>('DeviceCountOrderByAggregateInput').implement({
  fields: DeviceCountOrderByAggregateInputFields,
});

export const DeviceMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  deviceType: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  pushTokenId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceMaxOrderByAggregateInput>>('DeviceMaxOrderByAggregateInput').implement({
  fields: DeviceMaxOrderByAggregateInputFields,
});

export const DeviceMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  deviceType: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  pushTokenId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceMinOrderByAggregateInput>>('DeviceMinOrderByAggregateInput').implement({
  fields: DeviceMinOrderByAggregateInputFields,
});

export const DateTimeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const DateTimeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFilter>>('DateTimeFilter').implement({
  fields: DateTimeFilterFields,
});

export const DeviceProfileListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":DeviceProfileWhereInput}),
  some: t.field({"required":false,"type":DeviceProfileWhereInput}),
  none: t.field({"required":false,"type":DeviceProfileWhereInput}),
});
export const DeviceProfileListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileListRelationFilter>>('DeviceProfileListRelationFilter').implement({
  fields: DeviceProfileListRelationFilterFields,
});

export const DeviceProfileOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const DeviceProfileOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileOrderByRelationAggregateInput>>('DeviceProfileOrderByRelationAggregateInput').implement({
  fields: DeviceProfileOrderByRelationAggregateInputFields,
});

export const DeviceManagerCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceManagerCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCountOrderByAggregateInput>>('DeviceManagerCountOrderByAggregateInput').implement({
  fields: DeviceManagerCountOrderByAggregateInputFields,
});

export const DeviceManagerMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceManagerMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerMaxOrderByAggregateInput>>('DeviceManagerMaxOrderByAggregateInput').implement({
  fields: DeviceManagerMaxOrderByAggregateInputFields,
});

export const DeviceManagerMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceManagerMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerMinOrderByAggregateInput>>('DeviceManagerMinOrderByAggregateInput').implement({
  fields: DeviceManagerMinOrderByAggregateInputFields,
});

export const DateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const DateTimeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeWithAggregatesFilter>>('DateTimeWithAggregatesFilter').implement({
  fields: DateTimeWithAggregatesFilterFields,
});

export const EnumAppTypeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":AppType}),
  in: t.field({"required":false,"type":[AppType]}),
  notIn: t.field({"required":false,"type":[AppType]}),
  not: t.field({"required":false,"type":AppType}),
});
export const EnumAppTypeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumAppTypeNullableFilter>>('EnumAppTypeNullableFilter').implement({
  fields: EnumAppTypeNullableFilterFields,
});

export const EnumProfileTypeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":ProfileType}),
  in: t.field({"required":false,"type":[ProfileType]}),
  notIn: t.field({"required":false,"type":[ProfileType]}),
  not: t.field({"required":false,"type":ProfileType}),
});
export const EnumProfileTypeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumProfileTypeNullableFilter>>('EnumProfileTypeNullableFilter').implement({
  fields: EnumProfileTypeNullableFilterFields,
});

export const RefreshTokenRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":RefreshTokenWhereInput}),
  isNot: t.field({"required":false,"type":RefreshTokenWhereInput}),
});
export const RefreshTokenRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenRelationFilter>>('RefreshTokenRelationFilter').implement({
  fields: RefreshTokenRelationFilterFields,
});

export const DeviceProfileCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  AppType: t.field({"required":false,"type":SortOrder}),
  ProfileType: t.field({"required":false,"type":SortOrder}),
  profileId: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  accesstoken: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceProfileCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCountOrderByAggregateInput>>('DeviceProfileCountOrderByAggregateInput').implement({
  fields: DeviceProfileCountOrderByAggregateInputFields,
});

export const DeviceProfileMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  AppType: t.field({"required":false,"type":SortOrder}),
  ProfileType: t.field({"required":false,"type":SortOrder}),
  profileId: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  accesstoken: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceProfileMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileMaxOrderByAggregateInput>>('DeviceProfileMaxOrderByAggregateInput').implement({
  fields: DeviceProfileMaxOrderByAggregateInputFields,
});

export const DeviceProfileMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  AppType: t.field({"required":false,"type":SortOrder}),
  ProfileType: t.field({"required":false,"type":SortOrder}),
  profileId: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  accesstoken: t.field({"required":false,"type":SortOrder}),
  deviceManagerId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const DeviceProfileMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileMinOrderByAggregateInput>>('DeviceProfileMinOrderByAggregateInput').implement({
  fields: DeviceProfileMinOrderByAggregateInputFields,
});

export const EnumAppTypeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":AppType}),
  in: t.field({"required":false,"type":[AppType]}),
  notIn: t.field({"required":false,"type":[AppType]}),
  not: t.field({"required":false,"type":AppType}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedEnumAppTypeNullableFilter}),
  _max: t.field({"required":false,"type":NestedEnumAppTypeNullableFilter}),
});
export const EnumAppTypeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumAppTypeNullableWithAggregatesFilter>>('EnumAppTypeNullableWithAggregatesFilter').implement({
  fields: EnumAppTypeNullableWithAggregatesFilterFields,
});

export const EnumProfileTypeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":ProfileType}),
  in: t.field({"required":false,"type":[ProfileType]}),
  notIn: t.field({"required":false,"type":[ProfileType]}),
  not: t.field({"required":false,"type":ProfileType}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedEnumProfileTypeNullableFilter}),
  _max: t.field({"required":false,"type":NestedEnumProfileTypeNullableFilter}),
});
export const EnumProfileTypeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumProfileTypeNullableWithAggregatesFilter>>('EnumProfileTypeNullableWithAggregatesFilter').implement({
  fields: EnumProfileTypeNullableWithAggregatesFilterFields,
});

export const IntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFilter>>('IntFilter').implement({
  fields: IntFilterFields,
});

export const DeviceProfileRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":DeviceProfileWhereInput}),
  isNot: t.field({"required":false,"type":DeviceProfileWhereInput}),
});
export const DeviceProfileRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileRelationFilter>>('DeviceProfileRelationFilter').implement({
  fields: DeviceProfileRelationFilterFields,
});

export const RefreshTokenCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  token: t.field({"required":false,"type":SortOrder}),
  DeviceProfileId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const RefreshTokenCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenCountOrderByAggregateInput>>('RefreshTokenCountOrderByAggregateInput').implement({
  fields: RefreshTokenCountOrderByAggregateInputFields,
});

export const RefreshTokenAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const RefreshTokenAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenAvgOrderByAggregateInput>>('RefreshTokenAvgOrderByAggregateInput').implement({
  fields: RefreshTokenAvgOrderByAggregateInputFields,
});

export const RefreshTokenMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  token: t.field({"required":false,"type":SortOrder}),
  DeviceProfileId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const RefreshTokenMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenMaxOrderByAggregateInput>>('RefreshTokenMaxOrderByAggregateInput').implement({
  fields: RefreshTokenMaxOrderByAggregateInputFields,
});

export const RefreshTokenMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  token: t.field({"required":false,"type":SortOrder}),
  DeviceProfileId: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const RefreshTokenMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenMinOrderByAggregateInput>>('RefreshTokenMinOrderByAggregateInput').implement({
  fields: RefreshTokenMinOrderByAggregateInputFields,
});

export const RefreshTokenSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const RefreshTokenSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenSumOrderByAggregateInput>>('RefreshTokenSumOrderByAggregateInput').implement({
  fields: RefreshTokenSumOrderByAggregateInputFields,
});

export const IntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntWithAggregatesFilter>>('IntWithAggregatesFilter').implement({
  fields: IntWithAggregatesFilterFields,
});

export const PushTokenCreatereceiptsInputFields = (t: any) => ({
  set: t.field({"required":true,"type":[Json]}),
});
export const PushTokenCreatereceiptsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenCreatereceiptsInput>>('PushTokenCreatereceiptsInput').implement({
  fields: PushTokenCreatereceiptsInputFields,
});

export const DeviceCreateNestedOneWithoutPushTokenInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceCreateWithoutPushTokenInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceCreateOrConnectWithoutPushTokenInput}),
  connect: t.field({"required":false,"type":DeviceWhereUniqueInput}),
});
export const DeviceCreateNestedOneWithoutPushTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCreateNestedOneWithoutPushTokenInput>>('DeviceCreateNestedOneWithoutPushTokenInput').implement({
  fields: DeviceCreateNestedOneWithoutPushTokenInputFields,
});

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const StringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>>('StringFieldUpdateOperationsInput').implement({
  fields: StringFieldUpdateOperationsInputFields,
});

export const BoolFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.boolean({"required":false}),
});
export const BoolFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BoolFieldUpdateOperationsInput>>('BoolFieldUpdateOperationsInput').implement({
  fields: BoolFieldUpdateOperationsInputFields,
});

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const NullableStringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>>('NullableStringFieldUpdateOperationsInput').implement({
  fields: NullableStringFieldUpdateOperationsInputFields,
});

export const PushTokenUpdatereceiptsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[Json]}),
  push: t.field({"required":false,"type":Json}),
});
export const PushTokenUpdatereceiptsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenUpdatereceiptsInput>>('PushTokenUpdatereceiptsInput').implement({
  fields: PushTokenUpdatereceiptsInputFields,
});

export const NullableDateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":DateTime}),
});
export const NullableDateTimeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableDateTimeFieldUpdateOperationsInput>>('NullableDateTimeFieldUpdateOperationsInput').implement({
  fields: NullableDateTimeFieldUpdateOperationsInputFields,
});

export const DeviceUpdateOneWithoutPushTokenNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceCreateWithoutPushTokenInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceCreateOrConnectWithoutPushTokenInput}),
  upsert: t.field({"required":false,"type":DeviceUpsertWithoutPushTokenInput}),
  disconnect: t.boolean({"required":false}),
  delete: t.boolean({"required":false}),
  connect: t.field({"required":false,"type":DeviceWhereUniqueInput}),
  update: t.field({"required":false,"type":DeviceUpdateWithoutPushTokenInput}),
});
export const DeviceUpdateOneWithoutPushTokenNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceUpdateOneWithoutPushTokenNestedInput>>('DeviceUpdateOneWithoutPushTokenNestedInput').implement({
  fields: DeviceUpdateOneWithoutPushTokenNestedInputFields,
});

export const DeviceManagerCreateNestedOneWithoutDeviceInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceManagerCreateWithoutDeviceInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceManagerCreateOrConnectWithoutDeviceInput}),
  connect: t.field({"required":false,"type":DeviceManagerWhereUniqueInput}),
});
export const DeviceManagerCreateNestedOneWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCreateNestedOneWithoutDeviceInput>>('DeviceManagerCreateNestedOneWithoutDeviceInput').implement({
  fields: DeviceManagerCreateNestedOneWithoutDeviceInputFields,
});

export const PushTokenCreateNestedOneWithoutDeviceInputFields = (t: any) => ({
  create: t.field({"required":false,"type":PushTokenCreateWithoutDeviceInput}),
  connectOrCreate: t.field({"required":false,"type":PushTokenCreateOrConnectWithoutDeviceInput}),
  connect: t.field({"required":false,"type":PushTokenWhereUniqueInput}),
});
export const PushTokenCreateNestedOneWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenCreateNestedOneWithoutDeviceInput>>('PushTokenCreateNestedOneWithoutDeviceInput').implement({
  fields: PushTokenCreateNestedOneWithoutDeviceInputFields,
});

export const DeviceManagerUpdateOneRequiredWithoutDeviceNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceManagerCreateWithoutDeviceInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceManagerCreateOrConnectWithoutDeviceInput}),
  upsert: t.field({"required":false,"type":DeviceManagerUpsertWithoutDeviceInput}),
  connect: t.field({"required":false,"type":DeviceManagerWhereUniqueInput}),
  update: t.field({"required":false,"type":DeviceManagerUpdateWithoutDeviceInput}),
});
export const DeviceManagerUpdateOneRequiredWithoutDeviceNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerUpdateOneRequiredWithoutDeviceNestedInput>>('DeviceManagerUpdateOneRequiredWithoutDeviceNestedInput').implement({
  fields: DeviceManagerUpdateOneRequiredWithoutDeviceNestedInputFields,
});

export const PushTokenUpdateOneWithoutDeviceNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":PushTokenCreateWithoutDeviceInput}),
  connectOrCreate: t.field({"required":false,"type":PushTokenCreateOrConnectWithoutDeviceInput}),
  upsert: t.field({"required":false,"type":PushTokenUpsertWithoutDeviceInput}),
  disconnect: t.boolean({"required":false}),
  delete: t.boolean({"required":false}),
  connect: t.field({"required":false,"type":PushTokenWhereUniqueInput}),
  update: t.field({"required":false,"type":PushTokenUpdateWithoutDeviceInput}),
});
export const PushTokenUpdateOneWithoutDeviceNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenUpdateOneWithoutDeviceNestedInput>>('PushTokenUpdateOneWithoutDeviceNestedInput').implement({
  fields: PushTokenUpdateOneWithoutDeviceNestedInputFields,
});

export const DeviceCreateNestedOneWithoutDeviceManagerInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceCreateWithoutDeviceManagerInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceCreateOrConnectWithoutDeviceManagerInput}),
  connect: t.field({"required":false,"type":DeviceWhereUniqueInput}),
});
export const DeviceCreateNestedOneWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCreateNestedOneWithoutDeviceManagerInput>>('DeviceCreateNestedOneWithoutDeviceManagerInput').implement({
  fields: DeviceCreateNestedOneWithoutDeviceManagerInputFields,
});

export const DeviceProfileCreateNestedManyWithoutDeviceManagerInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceProfileCreateWithoutDeviceManagerInput}),
  connectOrCreate: t.field({"required":false,"type":[DeviceProfileCreateOrConnectWithoutDeviceManagerInput]}),
  createMany: t.field({"required":false,"type":DeviceProfileCreateManyDeviceManagerInputEnvelope}),
  connect: t.field({"required":false,"type":[DeviceProfileWhereUniqueInput]}),
});
export const DeviceProfileCreateNestedManyWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateNestedManyWithoutDeviceManagerInput>>('DeviceProfileCreateNestedManyWithoutDeviceManagerInput').implement({
  fields: DeviceProfileCreateNestedManyWithoutDeviceManagerInputFields,
});

export const DateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":DateTime}),
});
export const DateTimeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFieldUpdateOperationsInput>>('DateTimeFieldUpdateOperationsInput').implement({
  fields: DateTimeFieldUpdateOperationsInputFields,
});

export const DeviceUpdateOneWithoutDeviceManagerNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceCreateWithoutDeviceManagerInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceCreateOrConnectWithoutDeviceManagerInput}),
  upsert: t.field({"required":false,"type":DeviceUpsertWithoutDeviceManagerInput}),
  disconnect: t.boolean({"required":false}),
  delete: t.boolean({"required":false}),
  connect: t.field({"required":false,"type":DeviceWhereUniqueInput}),
  update: t.field({"required":false,"type":DeviceUpdateWithoutDeviceManagerInput}),
});
export const DeviceUpdateOneWithoutDeviceManagerNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceUpdateOneWithoutDeviceManagerNestedInput>>('DeviceUpdateOneWithoutDeviceManagerNestedInput').implement({
  fields: DeviceUpdateOneWithoutDeviceManagerNestedInputFields,
});

export const DeviceProfileUpdateManyWithoutDeviceManagerNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceProfileCreateWithoutDeviceManagerInput}),
  connectOrCreate: t.field({"required":false,"type":[DeviceProfileCreateOrConnectWithoutDeviceManagerInput]}),
  upsert: t.field({"required":false,"type":[DeviceProfileUpsertWithWhereUniqueWithoutDeviceManagerInput]}),
  createMany: t.field({"required":false,"type":DeviceProfileCreateManyDeviceManagerInputEnvelope}),
  set: t.field({"required":false,"type":[DeviceProfileWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[DeviceProfileWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[DeviceProfileWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[DeviceProfileWhereUniqueInput]}),
  update: t.field({"required":false,"type":[DeviceProfileUpdateWithWhereUniqueWithoutDeviceManagerInput]}),
  updateMany: t.field({"required":false,"type":[DeviceProfileUpdateManyWithWhereWithoutDeviceManagerInput]}),
  deleteMany: t.field({"required":false,"type":[DeviceProfileScalarWhereInput]}),
});
export const DeviceProfileUpdateManyWithoutDeviceManagerNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpdateManyWithoutDeviceManagerNestedInput>>('DeviceProfileUpdateManyWithoutDeviceManagerNestedInput').implement({
  fields: DeviceProfileUpdateManyWithoutDeviceManagerNestedInputFields,
});

export const DeviceManagerCreateNestedOneWithoutDeviceProfileInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceManagerCreateWithoutDeviceProfileInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceManagerCreateOrConnectWithoutDeviceProfileInput}),
  connect: t.field({"required":false,"type":DeviceManagerWhereUniqueInput}),
});
export const DeviceManagerCreateNestedOneWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCreateNestedOneWithoutDeviceProfileInput>>('DeviceManagerCreateNestedOneWithoutDeviceProfileInput').implement({
  fields: DeviceManagerCreateNestedOneWithoutDeviceProfileInputFields,
});

export const RefreshTokenCreateNestedOneWithoutDeviceProfileInputFields = (t: any) => ({
  create: t.field({"required":false,"type":RefreshTokenCreateWithoutDeviceProfileInput}),
  connectOrCreate: t.field({"required":false,"type":RefreshTokenCreateOrConnectWithoutDeviceProfileInput}),
  connect: t.field({"required":false,"type":RefreshTokenWhereUniqueInput}),
});
export const RefreshTokenCreateNestedOneWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenCreateNestedOneWithoutDeviceProfileInput>>('RefreshTokenCreateNestedOneWithoutDeviceProfileInput').implement({
  fields: RefreshTokenCreateNestedOneWithoutDeviceProfileInputFields,
});

export const NullableEnumAppTypeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":AppType}),
});
export const NullableEnumAppTypeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableEnumAppTypeFieldUpdateOperationsInput>>('NullableEnumAppTypeFieldUpdateOperationsInput').implement({
  fields: NullableEnumAppTypeFieldUpdateOperationsInputFields,
});

export const NullableEnumProfileTypeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":ProfileType}),
});
export const NullableEnumProfileTypeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableEnumProfileTypeFieldUpdateOperationsInput>>('NullableEnumProfileTypeFieldUpdateOperationsInput').implement({
  fields: NullableEnumProfileTypeFieldUpdateOperationsInputFields,
});

export const DeviceManagerUpdateOneRequiredWithoutDeviceProfileNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceManagerCreateWithoutDeviceProfileInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceManagerCreateOrConnectWithoutDeviceProfileInput}),
  upsert: t.field({"required":false,"type":DeviceManagerUpsertWithoutDeviceProfileInput}),
  connect: t.field({"required":false,"type":DeviceManagerWhereUniqueInput}),
  update: t.field({"required":false,"type":DeviceManagerUpdateWithoutDeviceProfileInput}),
});
export const DeviceManagerUpdateOneRequiredWithoutDeviceProfileNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerUpdateOneRequiredWithoutDeviceProfileNestedInput>>('DeviceManagerUpdateOneRequiredWithoutDeviceProfileNestedInput').implement({
  fields: DeviceManagerUpdateOneRequiredWithoutDeviceProfileNestedInputFields,
});

export const RefreshTokenUpdateOneWithoutDeviceProfileNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":RefreshTokenCreateWithoutDeviceProfileInput}),
  connectOrCreate: t.field({"required":false,"type":RefreshTokenCreateOrConnectWithoutDeviceProfileInput}),
  upsert: t.field({"required":false,"type":RefreshTokenUpsertWithoutDeviceProfileInput}),
  disconnect: t.boolean({"required":false}),
  delete: t.boolean({"required":false}),
  connect: t.field({"required":false,"type":RefreshTokenWhereUniqueInput}),
  update: t.field({"required":false,"type":RefreshTokenUpdateWithoutDeviceProfileInput}),
});
export const RefreshTokenUpdateOneWithoutDeviceProfileNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenUpdateOneWithoutDeviceProfileNestedInput>>('RefreshTokenUpdateOneWithoutDeviceProfileNestedInput').implement({
  fields: RefreshTokenUpdateOneWithoutDeviceProfileNestedInputFields,
});

export const DeviceProfileCreateNestedOneWithoutRefreshTokenInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceProfileCreateWithoutRefreshTokenInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceProfileCreateOrConnectWithoutRefreshTokenInput}),
  connect: t.field({"required":false,"type":DeviceProfileWhereUniqueInput}),
});
export const DeviceProfileCreateNestedOneWithoutRefreshTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateNestedOneWithoutRefreshTokenInput>>('DeviceProfileCreateNestedOneWithoutRefreshTokenInput').implement({
  fields: DeviceProfileCreateNestedOneWithoutRefreshTokenInputFields,
});

export const DeviceProfileUpdateOneWithoutRefreshTokenNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":DeviceProfileCreateWithoutRefreshTokenInput}),
  connectOrCreate: t.field({"required":false,"type":DeviceProfileCreateOrConnectWithoutRefreshTokenInput}),
  upsert: t.field({"required":false,"type":DeviceProfileUpsertWithoutRefreshTokenInput}),
  disconnect: t.boolean({"required":false}),
  delete: t.boolean({"required":false}),
  connect: t.field({"required":false,"type":DeviceProfileWhereUniqueInput}),
  update: t.field({"required":false,"type":DeviceProfileUpdateWithoutRefreshTokenInput}),
});
export const DeviceProfileUpdateOneWithoutRefreshTokenNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpdateOneWithoutRefreshTokenNestedInput>>('DeviceProfileUpdateOneWithoutRefreshTokenNestedInput').implement({
  fields: DeviceProfileUpdateOneWithoutRefreshTokenNestedInputFields,
});

export const IntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({"required":false}),
  increment: t.int({"required":false}),
  decrement: t.int({"required":false}),
  multiply: t.int({"required":false}),
  divide: t.int({"required":false}),
});
export const IntFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFieldUpdateOperationsInput>>('IntFieldUpdateOperationsInput').implement({
  fields: IntFieldUpdateOperationsInputFields,
});

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>>('NestedStringFilter').implement({
  fields: NestedStringFilterFields,
});

export const NestedBoolFilterFields = (t: any) => ({
  equals: t.boolean({"required":false}),
  not: t.field({"required":false,"type":NestedBoolFilter}),
});
export const NestedBoolFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedBoolFilter>>('NestedBoolFilter').implement({
  fields: NestedBoolFilterFields,
});

export const NestedStringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableFilter>>('NestedStringNullableFilter').implement({
  fields: NestedStringNullableFilterFields,
});

export const NestedDateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const NestedDateTimeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableFilter>>('NestedDateTimeNullableFilter').implement({
  fields: NestedDateTimeNullableFilterFields,
});

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>>('NestedStringWithAggregatesFilter').implement({
  fields: NestedStringWithAggregatesFilterFields,
});

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>>('NestedIntFilter').implement({
  fields: NestedIntFilterFields,
});

export const NestedBoolWithAggregatesFilterFields = (t: any) => ({
  equals: t.boolean({"required":false}),
  not: t.field({"required":false,"type":NestedBoolWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedBoolFilter}),
  _max: t.field({"required":false,"type":NestedBoolFilter}),
});
export const NestedBoolWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedBoolWithAggregatesFilter>>('NestedBoolWithAggregatesFilter').implement({
  fields: NestedBoolWithAggregatesFilterFields,
});

export const NestedStringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableWithAggregatesFilter>>('NestedStringNullableWithAggregatesFilter').implement({
  fields: NestedStringNullableWithAggregatesFilterFields,
});

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const NestedIntNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>>('NestedIntNullableFilter').implement({
  fields: NestedIntNullableFilterFields,
});

export const NestedDateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const NestedDateTimeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableWithAggregatesFilter>>('NestedDateTimeNullableWithAggregatesFilter').implement({
  fields: NestedDateTimeNullableWithAggregatesFilterFields,
});

export const NestedDateTimeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const NestedDateTimeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeFilter>>('NestedDateTimeFilter').implement({
  fields: NestedDateTimeFilterFields,
});

export const NestedDateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const NestedDateTimeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeWithAggregatesFilter>>('NestedDateTimeWithAggregatesFilter').implement({
  fields: NestedDateTimeWithAggregatesFilterFields,
});

export const NestedEnumAppTypeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":AppType}),
  in: t.field({"required":false,"type":[AppType]}),
  notIn: t.field({"required":false,"type":[AppType]}),
  not: t.field({"required":false,"type":AppType}),
});
export const NestedEnumAppTypeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumAppTypeNullableFilter>>('NestedEnumAppTypeNullableFilter').implement({
  fields: NestedEnumAppTypeNullableFilterFields,
});

export const NestedEnumProfileTypeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":ProfileType}),
  in: t.field({"required":false,"type":[ProfileType]}),
  notIn: t.field({"required":false,"type":[ProfileType]}),
  not: t.field({"required":false,"type":ProfileType}),
});
export const NestedEnumProfileTypeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumProfileTypeNullableFilter>>('NestedEnumProfileTypeNullableFilter').implement({
  fields: NestedEnumProfileTypeNullableFilterFields,
});

export const NestedEnumAppTypeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":AppType}),
  in: t.field({"required":false,"type":[AppType]}),
  notIn: t.field({"required":false,"type":[AppType]}),
  not: t.field({"required":false,"type":AppType}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedEnumAppTypeNullableFilter}),
  _max: t.field({"required":false,"type":NestedEnumAppTypeNullableFilter}),
});
export const NestedEnumAppTypeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumAppTypeNullableWithAggregatesFilter>>('NestedEnumAppTypeNullableWithAggregatesFilter').implement({
  fields: NestedEnumAppTypeNullableWithAggregatesFilterFields,
});

export const NestedEnumProfileTypeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":ProfileType}),
  in: t.field({"required":false,"type":[ProfileType]}),
  notIn: t.field({"required":false,"type":[ProfileType]}),
  not: t.field({"required":false,"type":ProfileType}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedEnumProfileTypeNullableFilter}),
  _max: t.field({"required":false,"type":NestedEnumProfileTypeNullableFilter}),
});
export const NestedEnumProfileTypeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumProfileTypeNullableWithAggregatesFilter>>('NestedEnumProfileTypeNullableWithAggregatesFilter').implement({
  fields: NestedEnumProfileTypeNullableWithAggregatesFilterFields,
});

export const NestedIntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntWithAggregatesFilter>>('NestedIntWithAggregatesFilter').implement({
  fields: NestedIntWithAggregatesFilterFields,
});

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>>('NestedFloatFilter').implement({
  fields: NestedFloatFilterFields,
});

export const DeviceCreateWithoutPushTokenInputFields = (t: any) => ({
  id: t.string({"required":false}),
  deviceType: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  DeviceManager: t.field({"required":true,"type":DeviceManagerCreateNestedOneWithoutDeviceInput}),
});
export const DeviceCreateWithoutPushTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCreateWithoutPushTokenInput>>('DeviceCreateWithoutPushTokenInput').implement({
  fields: DeviceCreateWithoutPushTokenInputFields,
});

export const DeviceCreateOrConnectWithoutPushTokenInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceWhereUniqueInput}),
  create: t.field({"required":true,"type":DeviceCreateWithoutPushTokenInput}),
});
export const DeviceCreateOrConnectWithoutPushTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCreateOrConnectWithoutPushTokenInput>>('DeviceCreateOrConnectWithoutPushTokenInput').implement({
  fields: DeviceCreateOrConnectWithoutPushTokenInputFields,
});

export const DeviceUpsertWithoutPushTokenInputFields = (t: any) => ({
  update: t.field({"required":true,"type":DeviceUpdateWithoutPushTokenInput}),
  create: t.field({"required":true,"type":DeviceCreateWithoutPushTokenInput}),
});
export const DeviceUpsertWithoutPushTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceUpsertWithoutPushTokenInput>>('DeviceUpsertWithoutPushTokenInput').implement({
  fields: DeviceUpsertWithoutPushTokenInputFields,
});

export const DeviceUpdateWithoutPushTokenInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  deviceType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  DeviceManager: t.field({"required":false,"type":DeviceManagerUpdateOneRequiredWithoutDeviceNestedInput}),
});
export const DeviceUpdateWithoutPushTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceUpdateWithoutPushTokenInput>>('DeviceUpdateWithoutPushTokenInput').implement({
  fields: DeviceUpdateWithoutPushTokenInputFields,
});

export const DeviceManagerCreateWithoutDeviceInputFields = (t: any) => ({
  id: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileCreateNestedManyWithoutDeviceManagerInput}),
});
export const DeviceManagerCreateWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCreateWithoutDeviceInput>>('DeviceManagerCreateWithoutDeviceInput').implement({
  fields: DeviceManagerCreateWithoutDeviceInputFields,
});

export const DeviceManagerCreateOrConnectWithoutDeviceInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceManagerWhereUniqueInput}),
  create: t.field({"required":true,"type":DeviceManagerCreateWithoutDeviceInput}),
});
export const DeviceManagerCreateOrConnectWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCreateOrConnectWithoutDeviceInput>>('DeviceManagerCreateOrConnectWithoutDeviceInput').implement({
  fields: DeviceManagerCreateOrConnectWithoutDeviceInputFields,
});

export const PushTokenCreateWithoutDeviceInputFields = (t: any) => ({
  id: t.string({"required":false}),
  isExpired: t.boolean({"required":false}),
  expoToken: t.string({"required":false}),
  androidToken: t.string({"required":false}),
  appleToken: t.string({"required":false}),
  receipts: t.field({"required":false,"type":[Json]}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const PushTokenCreateWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenCreateWithoutDeviceInput>>('PushTokenCreateWithoutDeviceInput').implement({
  fields: PushTokenCreateWithoutDeviceInputFields,
});

export const PushTokenCreateOrConnectWithoutDeviceInputFields = (t: any) => ({
  where: t.field({"required":true,"type":PushTokenWhereUniqueInput}),
  create: t.field({"required":true,"type":PushTokenCreateWithoutDeviceInput}),
});
export const PushTokenCreateOrConnectWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenCreateOrConnectWithoutDeviceInput>>('PushTokenCreateOrConnectWithoutDeviceInput').implement({
  fields: PushTokenCreateOrConnectWithoutDeviceInputFields,
});

export const DeviceManagerUpsertWithoutDeviceInputFields = (t: any) => ({
  update: t.field({"required":true,"type":DeviceManagerUpdateWithoutDeviceInput}),
  create: t.field({"required":true,"type":DeviceManagerCreateWithoutDeviceInput}),
});
export const DeviceManagerUpsertWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerUpsertWithoutDeviceInput>>('DeviceManagerUpsertWithoutDeviceInput').implement({
  fields: DeviceManagerUpsertWithoutDeviceInputFields,
});

export const DeviceManagerUpdateWithoutDeviceInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  DeviceProfile: t.field({"required":false,"type":DeviceProfileUpdateManyWithoutDeviceManagerNestedInput}),
});
export const DeviceManagerUpdateWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerUpdateWithoutDeviceInput>>('DeviceManagerUpdateWithoutDeviceInput').implement({
  fields: DeviceManagerUpdateWithoutDeviceInputFields,
});

export const PushTokenUpsertWithoutDeviceInputFields = (t: any) => ({
  update: t.field({"required":true,"type":PushTokenUpdateWithoutDeviceInput}),
  create: t.field({"required":true,"type":PushTokenCreateWithoutDeviceInput}),
});
export const PushTokenUpsertWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenUpsertWithoutDeviceInput>>('PushTokenUpsertWithoutDeviceInput').implement({
  fields: PushTokenUpsertWithoutDeviceInputFields,
});

export const PushTokenUpdateWithoutDeviceInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isExpired: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  expoToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  androidToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  appleToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  receipts: t.field({"required":false,"type":[Json]}),
  createdAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const PushTokenUpdateWithoutDeviceInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PushTokenUpdateWithoutDeviceInput>>('PushTokenUpdateWithoutDeviceInput').implement({
  fields: PushTokenUpdateWithoutDeviceInputFields,
});

export const DeviceCreateWithoutDeviceManagerInputFields = (t: any) => ({
  id: t.string({"required":false}),
  deviceType: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  PushToken: t.field({"required":false,"type":PushTokenCreateNestedOneWithoutDeviceInput}),
});
export const DeviceCreateWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCreateWithoutDeviceManagerInput>>('DeviceCreateWithoutDeviceManagerInput').implement({
  fields: DeviceCreateWithoutDeviceManagerInputFields,
});

export const DeviceCreateOrConnectWithoutDeviceManagerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceWhereUniqueInput}),
  create: t.field({"required":true,"type":DeviceCreateWithoutDeviceManagerInput}),
});
export const DeviceCreateOrConnectWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceCreateOrConnectWithoutDeviceManagerInput>>('DeviceCreateOrConnectWithoutDeviceManagerInput').implement({
  fields: DeviceCreateOrConnectWithoutDeviceManagerInputFields,
});

export const DeviceProfileCreateWithoutDeviceManagerInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AppType: t.field({"required":false,"type":AppType}),
  ProfileType: t.field({"required":false,"type":ProfileType}),
  profileId: t.string({"required":false}),
  isActive: t.boolean({"required":true}),
  accesstoken: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  RefreshToken: t.field({"required":false,"type":RefreshTokenCreateNestedOneWithoutDeviceProfileInput}),
});
export const DeviceProfileCreateWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateWithoutDeviceManagerInput>>('DeviceProfileCreateWithoutDeviceManagerInput').implement({
  fields: DeviceProfileCreateWithoutDeviceManagerInputFields,
});

export const DeviceProfileCreateOrConnectWithoutDeviceManagerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceProfileWhereUniqueInput}),
  create: t.field({"required":true,"type":DeviceProfileCreateWithoutDeviceManagerInput}),
});
export const DeviceProfileCreateOrConnectWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateOrConnectWithoutDeviceManagerInput>>('DeviceProfileCreateOrConnectWithoutDeviceManagerInput').implement({
  fields: DeviceProfileCreateOrConnectWithoutDeviceManagerInputFields,
});

export const DeviceProfileCreateManyDeviceManagerInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[DeviceProfileCreateManyDeviceManagerInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const DeviceProfileCreateManyDeviceManagerInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateManyDeviceManagerInputEnvelope>>('DeviceProfileCreateManyDeviceManagerInputEnvelope').implement({
  fields: DeviceProfileCreateManyDeviceManagerInputEnvelopeFields,
});

export const DeviceUpsertWithoutDeviceManagerInputFields = (t: any) => ({
  update: t.field({"required":true,"type":DeviceUpdateWithoutDeviceManagerInput}),
  create: t.field({"required":true,"type":DeviceCreateWithoutDeviceManagerInput}),
});
export const DeviceUpsertWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceUpsertWithoutDeviceManagerInput>>('DeviceUpsertWithoutDeviceManagerInput').implement({
  fields: DeviceUpsertWithoutDeviceManagerInputFields,
});

export const DeviceUpdateWithoutDeviceManagerInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  deviceType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  PushToken: t.field({"required":false,"type":PushTokenUpdateOneWithoutDeviceNestedInput}),
});
export const DeviceUpdateWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceUpdateWithoutDeviceManagerInput>>('DeviceUpdateWithoutDeviceManagerInput').implement({
  fields: DeviceUpdateWithoutDeviceManagerInputFields,
});

export const DeviceProfileUpsertWithWhereUniqueWithoutDeviceManagerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceProfileWhereUniqueInput}),
  update: t.field({"required":true,"type":DeviceProfileUpdateWithoutDeviceManagerInput}),
  create: t.field({"required":true,"type":DeviceProfileCreateWithoutDeviceManagerInput}),
});
export const DeviceProfileUpsertWithWhereUniqueWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpsertWithWhereUniqueWithoutDeviceManagerInput>>('DeviceProfileUpsertWithWhereUniqueWithoutDeviceManagerInput').implement({
  fields: DeviceProfileUpsertWithWhereUniqueWithoutDeviceManagerInputFields,
});

export const DeviceProfileUpdateWithWhereUniqueWithoutDeviceManagerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceProfileWhereUniqueInput}),
  data: t.field({"required":true,"type":DeviceProfileUpdateWithoutDeviceManagerInput}),
});
export const DeviceProfileUpdateWithWhereUniqueWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpdateWithWhereUniqueWithoutDeviceManagerInput>>('DeviceProfileUpdateWithWhereUniqueWithoutDeviceManagerInput').implement({
  fields: DeviceProfileUpdateWithWhereUniqueWithoutDeviceManagerInputFields,
});

export const DeviceProfileUpdateManyWithWhereWithoutDeviceManagerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceProfileScalarWhereInput}),
  data: t.field({"required":true,"type":DeviceProfileUpdateManyMutationInput}),
});
export const DeviceProfileUpdateManyWithWhereWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpdateManyWithWhereWithoutDeviceManagerInput>>('DeviceProfileUpdateManyWithWhereWithoutDeviceManagerInput').implement({
  fields: DeviceProfileUpdateManyWithWhereWithoutDeviceManagerInputFields,
});

export const DeviceProfileScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[DeviceProfileScalarWhereInput]}),
  OR: t.field({"required":false,"type":[DeviceProfileScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[DeviceProfileScalarWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  AppType: t.field({"required":false,"type":EnumAppTypeNullableFilter}),
  ProfileType: t.field({"required":false,"type":EnumProfileTypeNullableFilter}),
  profileId: t.field({"required":false,"type":StringNullableFilter}),
  isActive: t.field({"required":false,"type":BoolFilter}),
  accesstoken: t.field({"required":false,"type":StringNullableFilter}),
  deviceManagerId: t.field({"required":false,"type":StringFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
});
export const DeviceProfileScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileScalarWhereInput>>('DeviceProfileScalarWhereInput').implement({
  fields: DeviceProfileScalarWhereInputFields,
});

export const DeviceManagerCreateWithoutDeviceProfileInputFields = (t: any) => ({
  id: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  Device: t.field({"required":false,"type":DeviceCreateNestedOneWithoutDeviceManagerInput}),
});
export const DeviceManagerCreateWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCreateWithoutDeviceProfileInput>>('DeviceManagerCreateWithoutDeviceProfileInput').implement({
  fields: DeviceManagerCreateWithoutDeviceProfileInputFields,
});

export const DeviceManagerCreateOrConnectWithoutDeviceProfileInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceManagerWhereUniqueInput}),
  create: t.field({"required":true,"type":DeviceManagerCreateWithoutDeviceProfileInput}),
});
export const DeviceManagerCreateOrConnectWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerCreateOrConnectWithoutDeviceProfileInput>>('DeviceManagerCreateOrConnectWithoutDeviceProfileInput').implement({
  fields: DeviceManagerCreateOrConnectWithoutDeviceProfileInputFields,
});

export const RefreshTokenCreateWithoutDeviceProfileInputFields = (t: any) => ({
  token: t.string({"required":true}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const RefreshTokenCreateWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenCreateWithoutDeviceProfileInput>>('RefreshTokenCreateWithoutDeviceProfileInput').implement({
  fields: RefreshTokenCreateWithoutDeviceProfileInputFields,
});

export const RefreshTokenCreateOrConnectWithoutDeviceProfileInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RefreshTokenWhereUniqueInput}),
  create: t.field({"required":true,"type":RefreshTokenCreateWithoutDeviceProfileInput}),
});
export const RefreshTokenCreateOrConnectWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenCreateOrConnectWithoutDeviceProfileInput>>('RefreshTokenCreateOrConnectWithoutDeviceProfileInput').implement({
  fields: RefreshTokenCreateOrConnectWithoutDeviceProfileInputFields,
});

export const DeviceManagerUpsertWithoutDeviceProfileInputFields = (t: any) => ({
  update: t.field({"required":true,"type":DeviceManagerUpdateWithoutDeviceProfileInput}),
  create: t.field({"required":true,"type":DeviceManagerCreateWithoutDeviceProfileInput}),
});
export const DeviceManagerUpsertWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerUpsertWithoutDeviceProfileInput>>('DeviceManagerUpsertWithoutDeviceProfileInput').implement({
  fields: DeviceManagerUpsertWithoutDeviceProfileInputFields,
});

export const DeviceManagerUpdateWithoutDeviceProfileInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  Device: t.field({"required":false,"type":DeviceUpdateOneWithoutDeviceManagerNestedInput}),
});
export const DeviceManagerUpdateWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceManagerUpdateWithoutDeviceProfileInput>>('DeviceManagerUpdateWithoutDeviceProfileInput').implement({
  fields: DeviceManagerUpdateWithoutDeviceProfileInputFields,
});

export const RefreshTokenUpsertWithoutDeviceProfileInputFields = (t: any) => ({
  update: t.field({"required":true,"type":RefreshTokenUpdateWithoutDeviceProfileInput}),
  create: t.field({"required":true,"type":RefreshTokenCreateWithoutDeviceProfileInput}),
});
export const RefreshTokenUpsertWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenUpsertWithoutDeviceProfileInput>>('RefreshTokenUpsertWithoutDeviceProfileInput').implement({
  fields: RefreshTokenUpsertWithoutDeviceProfileInputFields,
});

export const RefreshTokenUpdateWithoutDeviceProfileInputFields = (t: any) => ({
  token: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const RefreshTokenUpdateWithoutDeviceProfileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RefreshTokenUpdateWithoutDeviceProfileInput>>('RefreshTokenUpdateWithoutDeviceProfileInput').implement({
  fields: RefreshTokenUpdateWithoutDeviceProfileInputFields,
});

export const DeviceProfileCreateWithoutRefreshTokenInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AppType: t.field({"required":false,"type":AppType}),
  ProfileType: t.field({"required":false,"type":ProfileType}),
  profileId: t.string({"required":false}),
  isActive: t.boolean({"required":true}),
  accesstoken: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  DeviceManager: t.field({"required":true,"type":DeviceManagerCreateNestedOneWithoutDeviceProfileInput}),
});
export const DeviceProfileCreateWithoutRefreshTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateWithoutRefreshTokenInput>>('DeviceProfileCreateWithoutRefreshTokenInput').implement({
  fields: DeviceProfileCreateWithoutRefreshTokenInputFields,
});

export const DeviceProfileCreateOrConnectWithoutRefreshTokenInputFields = (t: any) => ({
  where: t.field({"required":true,"type":DeviceProfileWhereUniqueInput}),
  create: t.field({"required":true,"type":DeviceProfileCreateWithoutRefreshTokenInput}),
});
export const DeviceProfileCreateOrConnectWithoutRefreshTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateOrConnectWithoutRefreshTokenInput>>('DeviceProfileCreateOrConnectWithoutRefreshTokenInput').implement({
  fields: DeviceProfileCreateOrConnectWithoutRefreshTokenInputFields,
});

export const DeviceProfileUpsertWithoutRefreshTokenInputFields = (t: any) => ({
  update: t.field({"required":true,"type":DeviceProfileUpdateWithoutRefreshTokenInput}),
  create: t.field({"required":true,"type":DeviceProfileCreateWithoutRefreshTokenInput}),
});
export const DeviceProfileUpsertWithoutRefreshTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpsertWithoutRefreshTokenInput>>('DeviceProfileUpsertWithoutRefreshTokenInput').implement({
  fields: DeviceProfileUpsertWithoutRefreshTokenInputFields,
});

export const DeviceProfileUpdateWithoutRefreshTokenInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  AppType: t.field({"required":false,"type":NullableEnumAppTypeFieldUpdateOperationsInput}),
  ProfileType: t.field({"required":false,"type":NullableEnumProfileTypeFieldUpdateOperationsInput}),
  profileId: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  accesstoken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  DeviceManager: t.field({"required":false,"type":DeviceManagerUpdateOneRequiredWithoutDeviceProfileNestedInput}),
});
export const DeviceProfileUpdateWithoutRefreshTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpdateWithoutRefreshTokenInput>>('DeviceProfileUpdateWithoutRefreshTokenInput').implement({
  fields: DeviceProfileUpdateWithoutRefreshTokenInputFields,
});

export const DeviceProfileCreateManyDeviceManagerInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AppType: t.field({"required":false,"type":AppType}),
  ProfileType: t.field({"required":false,"type":ProfileType}),
  profileId: t.string({"required":false}),
  isActive: t.boolean({"required":true}),
  accesstoken: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const DeviceProfileCreateManyDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileCreateManyDeviceManagerInput>>('DeviceProfileCreateManyDeviceManagerInput').implement({
  fields: DeviceProfileCreateManyDeviceManagerInputFields,
});

export const DeviceProfileUpdateWithoutDeviceManagerInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  AppType: t.field({"required":false,"type":NullableEnumAppTypeFieldUpdateOperationsInput}),
  ProfileType: t.field({"required":false,"type":NullableEnumProfileTypeFieldUpdateOperationsInput}),
  profileId: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  accesstoken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  RefreshToken: t.field({"required":false,"type":RefreshTokenUpdateOneWithoutDeviceProfileNestedInput}),
});
export const DeviceProfileUpdateWithoutDeviceManagerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DeviceProfileUpdateWithoutDeviceManagerInput>>('DeviceProfileUpdateWithoutDeviceManagerInput').implement({
  fields: DeviceProfileUpdateWithoutDeviceManagerInputFields,
});