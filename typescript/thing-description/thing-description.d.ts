/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Title = string;
export type TypeDeclaration = string | string[];
export type Description = string;
export type FormElementProperty = FormElementBase;
export type AnyUri = string;
export type Subprotocol = string;
export type Security = string[] | string;
export type Scopes = string[] | string;
export type AdditionalResponsesDefinition = {
  contentType?: string;
  schema?: string;
  success?: boolean;
  [k: string]: unknown;
}[];
export type DataSchemaType = "boolean" | "integer" | "number" | "string" | "object" | "array" | "null";
export type MultipleOfDefinition = number;
export type FormElementAction = FormElementBase;
export type FormElementEvent = FormElementBase;
export type LinkElement = BaseLinkElement & {
  [k: string]: unknown;
} & {
  [k: string]: unknown;
};
export type Bcp47String = string;
export type IconLinkElement = BaseLinkElement & {
  rel: "icon";
  sizes?: string;
  [k: string]: unknown;
};
export type FormElementRoot = FormElementBase;
export type SecurityScheme =
  | NoSecurityScheme
  | AutoSecurityScheme
  | ComboSecurityScheme
  | BasicSecurityScheme
  | DigestSecurityScheme
  | ApiKeySecurityScheme
  | BearerSecurityScheme
  | PskSecurityScheme
  | OAuth2SecurityScheme
  | AdditionalSecurityScheme;
export type ComboSecurityScheme =
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "combo";
      oneOf: [string, string, ...string[]];
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "combo";
      allOf: [string, string, ...string[]];
      [k: string]: unknown;
    };
export type ThingContext =
  | []
  | [
      ThingContextTdUriV11,
      ...(
        | AnyUri
        | {
            [k: string]: unknown;
          }
      )[]
    ]
  | "https://www.w3.org/2022/wot/td/v1.1"
  | [unknown, unknown, ...unknown[]]
  | [unknown, ...unknown[]]
  | "https://www.w3.org/2019/wot/td/v1";
export type ThingContextTdUriV11 = "https://www.w3.org/2022/wot/td/v1.1";

/**
 * JSON Schema for validating TD instances against the TD information model. TD instances can be with or without terms that have default values
 */
export interface ThingDescription {
  id?: string;
  title: Title;
  titles?: Titles;
  properties?: {
    [k: string]: PropertyElement;
  };
  actions?: {
    [k: string]: ActionElement;
  };
  events?: {
    [k: string]: EventElement;
  };
  description?: Description;
  descriptions?: Descriptions;
  version?: {
    instance: string;
    [k: string]: unknown;
  };
  links?: (LinkElement | IconLinkElement)[];
  forms?: [FormElementRoot, ...FormElementRoot[]];
  base?: AnyUri;
  securityDefinitions: {
    [k: string]: SecurityScheme;
  };
  schemaDefinitions?: {
    [k: string]: DataSchema;
  };
  support?: AnyUri;
  created?: string;
  modified?: string;
  profile?: AnyUri | [AnyUri, ...AnyUri[]];
  security: string | [string, ...string[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  "@type"?: TypeDeclaration;
  "@context": ThingContext;
  [k: string]: unknown;
}
export interface Titles {
  [k: string]: string;
}
export interface PropertyElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms: [FormElementProperty, ...FormElementProperty[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  observable?: boolean;
  writeOnly?: boolean;
  readOnly?: boolean;
  oneOf?: DataSchema[];
  unit?: string;
  enum?: [unknown, ...unknown[]];
  format?: string;
  const?: unknown;
  default?: unknown;
  type?: DataSchemaType;
  items?: DataSchema | DataSchema[];
  maxItems?: number;
  minItems?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  minLength?: number;
  maxLength?: number;
  multipleOf?: MultipleOfDefinition;
  properties?: {
    [k: string]: DataSchema;
  };
  required?: string[];
  [k: string]: unknown;
}
export interface Descriptions {
  [k: string]: string;
}
export interface FormElementBase {
  op?: string | string[];
  href: AnyUri;
  contentType?: string;
  contentCoding?: string;
  subprotocol?: Subprotocol;
  security?: Security;
  scopes?: Scopes;
  response?: ExpectedResponse;
  additionalResponses?: AdditionalResponsesDefinition;
  [k: string]: unknown;
}
export interface ExpectedResponse {
  contentType?: string;
  [k: string]: unknown;
}
export interface DataSchema {
  "@type"?: TypeDeclaration;
  description?: Description;
  title?: Title;
  descriptions?: Descriptions;
  titles?: Titles;
  writeOnly?: boolean;
  readOnly?: boolean;
  oneOf?: DataSchema[];
  unit?: string;
  enum?: [unknown, ...unknown[]];
  format?: string;
  const?: unknown;
  default?: unknown;
  contentEncoding?: string;
  contentMediaType?: string;
  type?: DataSchemaType;
  items?: DataSchema | DataSchema[];
  maxItems?: number;
  minItems?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  minLength?: number;
  maxLength?: number;
  multipleOf?: MultipleOfDefinition;
  properties?: {
    [k: string]: DataSchema;
  };
  required?: string[];
  [k: string]: unknown;
}
export interface ActionElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms: [FormElementAction, ...FormElementAction[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  input?: DataSchema;
  output?: DataSchema;
  safe?: boolean;
  idempotent?: boolean;
  synchronous?: boolean;
  [k: string]: unknown;
}
export interface EventElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms: [FormElementEvent, ...FormElementEvent[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  subscription?: DataSchema;
  data?: DataSchema;
  dataResponse?: DataSchema;
  cancellation?: DataSchema;
  [k: string]: unknown;
}
export interface BaseLinkElement {
  href: AnyUri;
  type?: string;
  rel?: string;
  anchor?: AnyUri;
  hreflang?: Bcp47String | Bcp47String[];
  [k: string]: unknown;
}
export interface NoSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "nosec";
  [k: string]: unknown;
}
export interface AutoSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "auto";
  [k: string]: unknown;
}
export interface BasicSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "basic";
  in?: "header" | "query" | "body" | "cookie" | "auto";
  name?: string;
  [k: string]: unknown;
}
export interface DigestSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "digest";
  qop?: "auth" | "auth-int";
  in?: "header" | "query" | "body" | "cookie" | "auto";
  name?: string;
  [k: string]: unknown;
}
export interface ApiKeySecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "apikey";
  in?: "header" | "query" | "body" | "cookie" | "uri" | "auto";
  name?: string;
  [k: string]: unknown;
}
export interface BearerSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "bearer";
  authorization?: AnyUri;
  alg?: string;
  format?: string;
  in?: "header" | "query" | "body" | "cookie" | "auto";
  name?: string;
  [k: string]: unknown;
}
export interface PskSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "psk";
  identity?: string;
  [k: string]: unknown;
}
export interface OAuth2SecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "oauth2";
  authorization?: AnyUri;
  token?: AnyUri;
  refresh?: AnyUri;
  scopes?: string[] | string;
  flow?: string | ("code" | "client" | "device");
  [k: string]: unknown;
}
/**
 * Applies to additional SecuritySchemes not defined in the WoT TD specification.
 */
export interface AdditionalSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: string;
  [k: string]: unknown;
}
