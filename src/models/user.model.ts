import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    description: "Automatic will be mongodb objectID",
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    description: "Email of User that is unique",
    type: 'string',
    required: true,
    index: {
      unique: true, //you should set email unique index by "shell" or "compass"
    },
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      maxLength: 30,
      minLength: 8,
    },
  })
  password: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    default: 'subscribe',
  })
  role?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @property({
    type: 'date',
    default: Date.now(),
  })
  createdAt: string;

  @property({
    type: 'date',
  })
  updatedAt?: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
