/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "title".
 */
export type Title = string;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "type_declaration".
 */
export type TypeDeclaration = string | string[];
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "description".
 */
export type Description = string;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "form_element_property".
 */
export type FormElementProperty = FormElementBase;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "anyUri".
 */
export type AnyUri = string;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "subprotocol".
 */
export type Subprotocol = string;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "security".
 */
export type Security = string[] | string;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "scopes".
 */
export type Scopes = string[] | string;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "additionalResponsesDefinition".
 */
export type AdditionalResponsesDefinition = {
  contentType?: string;
  schema?: string;
  success?: boolean;
  [k: string]: unknown;
}[];
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "placeholder-pattern".
 */
export type PlaceholderPattern = string;
export type DataSchemaType =
  | ("boolean" | "integer" | "number" | "string" | "object" | "array" | "null")
  | PlaceholderPattern;
export type DataSchemaType1 = string;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "multipleOfDefinition".
 */
export type MultipleOfDefinition = number | PlaceholderPattern;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "tm_ref".
 */
export type TmRef = string;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "form_element_action".
 */
export type FormElementAction = FormElementBase;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "form_element_event".
 */
export type FormElementEvent = FormElementBase;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "link_element".
 */
export type LinkElement = BaseLinkElement & {
  [k: string]: unknown;
};
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "icon_link_element".
 */
export type IconLinkElement = BaseLinkElement & {
  rel: "icon";
  sizes?: string;
  [k: string]: unknown;
};
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "form_element_root".
 */
export type FormElementRoot = FormElementBase;
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "securityScheme".
 */
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
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "comboSecurityScheme".
 */
export type ComboSecurityScheme =
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme?: ("combo" | PlaceholderPattern) & string;
      oneOf?: [string, string, ...string[]];
      "tm:ref"?: TmRef;
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme?: ("combo" | PlaceholderPattern) & string;
      allOf?: [string, string, ...string[]];
      "tm:ref"?: TmRef;
      [k: string]: unknown;
    };
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "tm_type_declaration".
 */
export type TmTypeDeclaration = "tm:ThingModel" | string[];
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "thing-context".
 */
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
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "thing-context-td-uri-v1.1".
 */
export type ThingContextTdUriV11 = "https://www.w3.org/2022/wot/td/v1.1";
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "tm_required".
 */
export type TmRequired = string[];
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "thing-context-td-uri-v1".
 */
export type ThingContextTdUriV1 = "https://www.w3.org/2019/wot/td/v1";
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "thing-context-td-uri-temp".
 */
export type ThingContextTdUriTemp = "http://www.w3.org/ns/td";
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "form".
 */
export type Form = FormElementProperty | FormElementAction | FormElementEvent | FormElementRoot;

/**
 * JSON Schema for validating Thing Models. This is automatically generated from the WoT TD Schema.
 */
export interface ThingModel {
  id?: string;
  title?: Title;
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
    instance?: string;
    [k: string]: unknown;
  };
  links?: (LinkElement | IconLinkElement)[];
  forms?: [FormElementRoot, ...FormElementRoot[]];
  base?: AnyUri;
  securityDefinitions?: {
    [k: string]: SecurityScheme;
  };
  schemaDefinitions?: {
    [k: string]: DataSchema;
  };
  support?: AnyUri;
  created?: string;
  modified?: string;
  profile?: AnyUri | [AnyUri, ...AnyUri[]];
  security?: string | [string, ...string[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  "@type": TmTypeDeclaration;
  "@context": ThingContext;
  "tm:required"?: TmRequired;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "titles".
 */
export interface Titles {
  [k: string]: string;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "property_element".
 */
export interface PropertyElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms?: [FormElementProperty, ...FormElementProperty[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  observable?: boolean | PlaceholderPattern;
  writeOnly?: boolean | PlaceholderPattern;
  readOnly?: boolean | PlaceholderPattern;
  oneOf?: DataSchema[];
  unit?: string;
  enum?: [unknown, ...unknown[]] | PlaceholderPattern;
  format?: string;
  const?: unknown;
  default?: unknown;
  type?: DataSchemaType & DataSchemaType1;
  items?: DataSchema | DataSchema[];
  maxItems?: number | PlaceholderPattern;
  minItems?: number | PlaceholderPattern;
  minimum?: number | PlaceholderPattern;
  maximum?: number | PlaceholderPattern;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  minLength?: number | PlaceholderPattern;
  maxLength?: number | PlaceholderPattern;
  multipleOf?: MultipleOfDefinition;
  properties?: {
    [k: string]: DataSchema;
  };
  required?: string[] | PlaceholderPattern;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "descriptions".
 */
export interface Descriptions {
  [k: string]: string;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "form_element_base".
 */
export interface FormElementBase {
  op?: string | string[];
  href?: AnyUri;
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
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "expectedResponse".
 */
export interface ExpectedResponse {
  contentType?: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "dataSchema".
 */
export interface DataSchema {
  "@type"?: TypeDeclaration;
  description?: Description;
  title?: Title;
  descriptions?: Descriptions;
  titles?: Titles;
  writeOnly?: boolean | PlaceholderPattern;
  readOnly?: boolean | PlaceholderPattern;
  oneOf?: DataSchema[];
  unit?: string;
  enum?: [unknown, ...unknown[]] | PlaceholderPattern;
  format?: string;
  const?: unknown;
  default?: unknown;
  contentEncoding?: string;
  contentMediaType?: string;
  type?: DataSchemaType & DataSchemaType1;
  items?: DataSchema | DataSchema[];
  maxItems?: number | PlaceholderPattern;
  minItems?: number | PlaceholderPattern;
  minimum?: number | PlaceholderPattern;
  maximum?: number | PlaceholderPattern;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  minLength?: number | PlaceholderPattern;
  maxLength?: number | PlaceholderPattern;
  multipleOf?: MultipleOfDefinition;
  properties?: {
    [k: string]: DataSchema;
  };
  required?: string[] | PlaceholderPattern;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "action_element".
 */
export interface ActionElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms?: [FormElementAction, ...FormElementAction[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  input?: DataSchema;
  output?: DataSchema;
  safe?: boolean | PlaceholderPattern;
  idempotent?: boolean | PlaceholderPattern;
  synchronous?: boolean | PlaceholderPattern;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "event_element".
 */
export interface EventElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms?: [FormElementEvent, ...FormElementEvent[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  subscription?: DataSchema;
  data?: DataSchema;
  dataResponse?: DataSchema;
  cancellation?: DataSchema;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "base_link_element".
 */
export interface BaseLinkElement {
  href?: AnyUri;
  type?: string;
  rel?: string;
  anchor?: AnyUri;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "noSecurityScheme".
 */
export interface NoSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: ("nosec" | PlaceholderPattern) & string;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "autoSecurityScheme".
 */
export interface AutoSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: ("auto" | PlaceholderPattern) & string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "basicSecurityScheme".
 */
export interface BasicSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: ("basic" | PlaceholderPattern) & string;
  in?: (("header" | "query" | "body" | "cookie" | "auto") | PlaceholderPattern) & string;
  name?: string;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "digestSecurityScheme".
 */
export interface DigestSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: ("digest" | PlaceholderPattern) & string;
  qop?: (("auth" | "auth-int") | PlaceholderPattern) & string;
  in?: (("header" | "query" | "body" | "cookie" | "auto") | PlaceholderPattern) & string;
  name?: string;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "apiKeySecurityScheme".
 */
export interface ApiKeySecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: ("apikey" | PlaceholderPattern) & string;
  in?: (("header" | "query" | "body" | "cookie") | PlaceholderPattern) & string;
  name?: string;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "bearerSecurityScheme".
 */
export interface BearerSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: ("bearer" | PlaceholderPattern) & string;
  authorization?: AnyUri;
  alg?: string;
  format?: string;
  in?: (("header" | "query" | "body" | "cookie" | "auto") | PlaceholderPattern) & string;
  name?: string;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "pskSecurityScheme".
 */
export interface PskSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: ("psk" | PlaceholderPattern) & string;
  identity?: string;
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "oAuth2SecurityScheme".
 */
export interface OAuth2SecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: ("oauth2" | PlaceholderPattern) & string;
  authorization?: AnyUri;
  token?: AnyUri;
  refresh?: AnyUri;
  scopes?: string[] | string;
  flow?: string | ((("code" | "client" | "device") | PlaceholderPattern) & string);
  "tm:ref"?: TmRef;
  [k: string]: unknown;
}
/**
 * Applies to additional SecuritySchemes not defined in the WoT TD specification.
 *
 * This interface was referenced by `ThingModel`'s JSON-Schema
 * via the `definition` "additionalSecurityScheme".
 */
export interface AdditionalSecurityScheme {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  proxy?: AnyUri;
  scheme?: string;
  [k: string]: unknown;
}