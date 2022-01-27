/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "title".
 */
export type Title = string;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "type_declaration".
 */
export type TypeDeclaration = string | string[];
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "description".
 */
export type Description = string;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "form_element_property".
 */
export type FormElementProperty = FormElementBase;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "anyUri".
 */
export type AnyUri = string;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "subprotocol".
 */
export type Subprotocol = string;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "security".
 */
export type Security = string[] | string;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "scopes".
 */
export type Scopes = string[] | string;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "additionalResponsesDefinition".
 */
export type AdditionalResponsesDefinition = {
  contentType?: string;
  schema?: string;
  success?: boolean;
  [k: string]: unknown;
}[];
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "dataSchema-type".
 */
export type DataSchemaType =
  | ("boolean" | "integer" | "number" | "string" | "object" | "array" | "null")
  | ("boolean" | "integer" | "number" | "string" | "object" | "array" | "null")[];
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "multipleOfDefinition".
 */
export type MultipleOfDefinition = number;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "form_element_action".
 */
export type FormElementAction = FormElementBase;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "form_element_event".
 */
export type FormElementEvent = FormElementBase;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "link_element".
 */
export type LinkElement = BaseLinkElement & {
  [k: string]: unknown;
};
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "icon_link_element".
 */
export type IconLinkElement = BaseLinkElement & {
  rel: "icon";
  sizes?: string;
  [k: string]: unknown;
};
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "form_element_root".
 */
export type FormElementRoot = FormElementBase;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "securityScheme".
 */
export type SecurityScheme =
  | NoSecurityScheme
  | ComboSecurityScheme
  | BasicSecurityScheme
  | DigestSecurityScheme
  | ApiKeySecurityScheme
  | BearerSecurityScheme
  | PskSecurityScheme
  | OAuth2SecurityScheme;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "comboSecurityScheme".
 */
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
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "thing-context".
 */
export type ThingContext =
  | []
  | [
      ThingContextW3CUri,
      ...(
        | AnyUri
        | {
            [k: string]: unknown;
          }
      )[]
    ]
  | ThingContextW3CUri;
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "thing-context-w3c-uri".
 */
export type ThingContextW3CUri =
  | "https://www.w3.org/2019/wot/td/v1"
  | "http://www.w3.org/ns/td"
  | "https://www.w3.org/2022/wot/td/v1.1";
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "form".
 */
export type Form = FormElementProperty | FormElementAction | FormElementEvent | FormElementRoot;

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
  security: string | [string, ...string[]];
  "@type"?: TypeDeclaration;
  "@context": ThingContext;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "titles".
 */
export interface Titles {
  [k: string]: string;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "property_element".
 */
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
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "descriptions".
 */
export interface Descriptions {
  [k: string]: string;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "form_element_base".
 */
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
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "expectedResponse".
 */
export interface ExpectedResponse {
  contentType?: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "dataSchema".
 */
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
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "action_element".
 */
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
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "event_element".
 */
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
  cancellation?: DataSchema;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "base_link_element".
 */
export interface BaseLinkElement {
  href: AnyUri;
  type?: string;
  rel?: string;
  anchor?: AnyUri;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "noSecurityScheme".
 */
export interface NoSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "nosec";
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "basicSecurityScheme".
 */
export interface BasicSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "basic";
  in?: "header" | "query" | "body" | "cookie";
  name?: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "digestSecurityScheme".
 */
export interface DigestSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "digest";
  qop?: "auth" | "auth-int";
  in?: "header" | "query" | "body" | "cookie";
  name?: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "apiKeySecurityScheme".
 */
export interface ApiKeySecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "apikey";
  in?: "header" | "query" | "body" | "cookie";
  name?: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "bearerSecurityScheme".
 */
export interface BearerSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "bearer";
  authorization?: AnyUri;
  alg?: string;
  format?: string;
  in?: "header" | "query" | "body" | "cookie";
  name?: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "pskSecurityScheme".
 */
export interface PskSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme: "psk";
  identity?: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingDescription`'s JSON-Schema
 * via the `definition` "oAuth2SecurityScheme".
 */
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
