/** GENERATED FILE on: 7/30/2019 11:36:31 AM **/

export module fhir {
/**
 * A stream of bytes
 * From: primitives.xml
 */
export type base64Binary = string;
/**
 * A URI that is a reference to a canonical URL on a FHIR resource
 * From: primitives.xml
 */
export type canonical = string;
/**
 * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
 * From: primitives.xml
 */
export type code = string;
/**
 * A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
 * From: primitives.xml
 */
export type date = string;
/**
 * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.  Dates SHALL be valid dates.
 * From: primitives.xml
 */
export type dateTime = string;
/**
 * A rational number with implicit precision
 * From: primitives.xml
 */
export type decimal = number;
/**
 * A length of time
 * From: duration.xml
 */
export type Duration = Quantity;
/**
 * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
 * From: primitives.xml
 */
export type id = string;
/**
 * An instant in time - known at least to the second
 * From: primitives.xml
 */
export type instant = string;
/**
 * A whole number
 * From: primitives.xml
 */
export type integer = number;
/**
 * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine
 * From: primitives.xml
 */
export type markdown = string;
/**
 * An integer with a value that is positive (e.g. >0)
 * From: primitives.xml
 */
export type positiveInt = number;
/**
 * A time during the day, with no date specified 
 * From: primitives.xml
 */
export type time = string;
/**
 * An integer with a value that is not negative (e.g. >= 0)
 * From: primitives.xml
 */
export type unsignedInt = number;
/**
 * String of characters used to identify a name or a resource
 * From: primitives.xml
 */
export type uri = string;
/**
 * A URI that is a literal reference
 * From: primitives.xml
 */
export type url = string;
/**
 * WARN: xhtml is defined as string as a definition cannot be found!
 * From: definition-file-not-found.xml
 */
export type xhtml = string;
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 * From: address.xml
 */
export interface Address extends Element {
	/**
	 * The name of the city, town, suburb, village or other community or delivery center
	 */
	city?: string;
	/**
	 * May contain extended information for property: 'city'
	 */
	_city?: Element;
	/**
	 * Country - a nation as commonly understood or generally accepted
	 */
	country?: string;
	/**
	 * May contain extended information for property: 'country'
	 */
	_country?: Element;
	/**
	 * The name of the administrative area (county)
	 */
	district?: string;
	/**
	 * May contain extended information for property: 'district'
	 */
	_district?: Element;
	/**
	 * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information
	 */
	line?: string[];
	/**
	 * May contain extended information for property: 'line'
	 */
	_line?: Element[];
	/**
	 * Time period when address was/is in use
	 */
	period?: Period;
	/**
	 * May contain extended information for property: 'period'
	 */
	_period?: Element;
	/**
	 * A postal code designating a region defined by the postal service
	 */
	postalCode?: string;
	/**
	 * May contain extended information for property: 'postalCode'
	 */
	_postalCode?: Element;
	/**
	 * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes)
	 */
	state?: string;
	/**
	 * May contain extended information for property: 'state'
	 */
	_state?: Element;
	/**
	 * Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts
	 */
	text?: string;
	/**
	 * May contain extended information for property: 'text'
	 */
	_text?: Element;
	/**
	 * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both
	 */
	type?: code;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
	/**
	 * The purpose of this address
	 */
	use?: code;
	/**
	 * May contain extended information for property: 'use'
	 */
	_use?: Element;
}
/**
 * A  text note which also  contains information about who made the statement and when
 * From: annotation.xml
 */
export interface Annotation extends Element {
	/**
	 * The individual responsible for making the annotation.
	 */
	authorReference?: Reference;
	/**
	 * May contain extended information for property: 'authorReference'
	 */
	_authorReference?: Element;
	/**
	 * The individual responsible for making the annotation.
	 */
	authorString?: string;
	/**
	 * May contain extended information for property: 'authorString'
	 */
	_authorString?: Element;
	/**
	 * The text of the annotation in markdown format
	 */
	text: markdown;
	/**
	 * May contain extended information for property: 'text'
	 */
	_text?: Element;
	/**
	 * Indicates when this particular annotation was made
	 */
	time?: dateTime;
	/**
	 * May contain extended information for property: 'time'
	 */
	_time?: Element;
}
/**
 * For referring to data content defined in other formats.
 * From: attachment.xml
 */
export interface Attachment extends Element {
	/**
	 * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate
	 */
	contentType?: code;
	/**
	 * May contain extended information for property: 'contentType'
	 */
	_contentType?: Element;
	/**
	 * The date that the attachment was first created
	 */
	creation?: dateTime;
	/**
	 * May contain extended information for property: 'creation'
	 */
	_creation?: Element;
	/**
	 * The actual data of the attachment - a sequence of bytes, base64 encoded
	 */
	data?: base64Binary;
	/**
	 * May contain extended information for property: 'data'
	 */
	_data?: Element;
	/**
	 * The calculated hash of the data using SHA-1. Represented using base64.
	 */
	hash?: base64Binary;
	/**
	 * May contain extended information for property: 'hash'
	 */
	_hash?: Element;
	/**
	 * The human language of the content. The value can be any valid value according to BCP 47
	 */
	language?: code;
	/**
	 * May contain extended information for property: 'language'
	 */
	_language?: Element;
	/**
	 * The number of bytes of data that make up this attachment (before base64 encoding, if that is done).
	 */
	size?: unsignedInt;
	/**
	 * May contain extended information for property: 'size'
	 */
	_size?: Element;
	/**
	 * A label or set of text to display in place of the data
	 */
	title?: string;
	/**
	 * May contain extended information for property: 'title'
	 */
	_title?: Element;
	/**
	 * A location where the data can be accessed
	 */
	url?: url;
	/**
	 * May contain extended information for property: 'url'
	 */
	_url?: Element;
}
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type
 * From: backboneelement.xml
 */
export interface BackboneElement extends Element {
	/**
	 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself)
	 */
	modifierExtension?: Extension[];
	/**
	 * May contain extended information for property: 'modifierExtension'
	 */
	_modifierExtension?: Element[];
}
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text
 * From: codeableconcept.xml
 */
export interface CodeableConcept extends Element {
	/**
	 * A reference to a code defined by a terminology system 
	 */
	coding?: Coding[];
	/**
	 * May contain extended information for property: 'coding'
	 */
	_coding?: Element[];
	/**
	 * A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user
	 */
	text?: string;
	/**
	 * May contain extended information for property: 'text'
	 */
	_text?: Element;
}
/**
 * A reference to a code defined by a terminology system 
 * From: coding.xml
 */
export interface Coding extends Element {
	/**
	 * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination)
	 */
	code?: code;
	/**
	 * May contain extended information for property: 'code'
	 */
	_code?: Element;
	/**
	 * A representation of the meaning of the code in the system, following the rules of the system
	 */
	display?: string;
	/**
	 * May contain extended information for property: 'display'
	 */
	_display?: Element;
	/**
	 * The identification of the code system that defines the meaning of the symbol in the code. 
	 */
	system?: uri;
	/**
	 * May contain extended information for property: 'system'
	 */
	_system?: Element;
	/**
	 * Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays)
	 */
	userSelected?: boolean;
	/**
	 * May contain extended information for property: 'userSelected'
	 */
	_userSelected?: Element;
	/**
	 * The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged
	 */
	version?: string;
	/**
	 * May contain extended information for property: 'version'
	 */
	_version?: Element;
}
/**
 * Specifies contact information for a person or organization
 * From: contactdetail.xml
 */
export interface ContactDetail extends Element {
	/**
	 * The name of an individual to contact
	 */
	name?: string;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
	/**
	 * The contact details for the individual (if a name was provided) or the organization
	 */
	telecom?: ContactPoint[];
	/**
	 * May contain extended information for property: 'telecom'
	 */
	_telecom?: Element[];
}
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 * From: contactpoint.xml
 */
export interface ContactPoint extends Element {
	/**
	 * Time period when the contact point was/is in use
	 */
	period?: Period;
	/**
	 * May contain extended information for property: 'period'
	 */
	_period?: Element;
	/**
	 * Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values
	 */
	rank?: positiveInt;
	/**
	 * May contain extended information for property: 'rank'
	 */
	_rank?: Element;
	/**
	 * Telecommunications form for contact point - what communications system is required to make use of the contact
	 */
	system?: code;
	/**
	 * May contain extended information for property: 'system'
	 */
	_system?: Element;
	/**
	 * Identifies the purpose for the contact point
	 */
	use?: code;
	/**
	 * May contain extended information for property: 'use'
	 */
	_use?: Element;
	/**
	 * The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).
	 */
	value?: string;
	/**
	 * May contain extended information for property: 'value'
	 */
	_value?: Element;
}
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers
 * From: contributor.xml
 */
export interface Contributor extends Element {
	/**
	 * Contact details to assist a user in finding and communicating with the contributor
	 */
	contact?: ContactDetail[];
	/**
	 * May contain extended information for property: 'contact'
	 */
	_contact?: Element[];
	/**
	 * The name of the individual or organization responsible for the contribution
	 */
	name: string;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
	/**
	 * The type of contributor
	 */
	type: code;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data
 * From: datarequirement.xml
 */
export interface DataRequirement extends Element {
	/**
	 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed
	 */
	codeFilter?: DataRequirementCodeFilter[];
	/**
	 * May contain extended information for property: 'codeFilter'
	 */
	_codeFilter?: Element[];
	/**
	 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed
	 */
	dateFilter?: DataRequirementDateFilter[];
	/**
	 * May contain extended information for property: 'dateFilter'
	 */
	_dateFilter?: Element[];
	/**
	 * Specifies a maximum number of results that are required (uses the _count search parameter)
	 */
	limit?: positiveInt;
	/**
	 * May contain extended information for property: 'limit'
	 */
	_limit?: Element;
	/**
	 * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 

The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details)
	 */
	mustSupport?: string[];
	/**
	 * May contain extended information for property: 'mustSupport'
	 */
	_mustSupport?: Element[];
	/**
	 * The profile of the required data, specified as the uri of the profile definition
	 */
	profile?: canonical[];
	/**
	 * May contain extended information for property: 'profile'
	 */
	_profile?: Element[];
	/**
	 * Specifies the order of the results to be returned
	 */
	sort?: DataRequirementSort[];
	/**
	 * May contain extended information for property: 'sort'
	 */
	_sort?: Element[];
	/**
	 * The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed
	 */
	subjectCodeableConcept?: CodeableConcept;
	/**
	 * May contain extended information for property: 'subjectCodeableConcept'
	 */
	_subjectCodeableConcept?: Element;
	/**
	 * The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed
	 */
	subjectReference?: Reference;
	/**
	 * May contain extended information for property: 'subjectReference'
	 */
	_subjectReference?: Element;
	/**
	 * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile
	 */
	type: code;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
}
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed
 * From: datarequirement.xml
 */
export interface DataRequirementCodeFilter extends Element {
	/**
	 * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes
	 */
	code?: Coding[];
	/**
	 * May contain extended information for property: 'code'
	 */
	_code?: Element[];
	/**
	 * The code-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept
	 */
	path?: string;
	/**
	 * May contain extended information for property: 'path'
	 */
	_path?: Element;
	/**
	 * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept
	 */
	searchParam?: string;
	/**
	 * May contain extended information for property: 'searchParam'
	 */
	_searchParam?: Element;
	/**
	 * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset
	 */
	valueSet?: canonical;
	/**
	 * May contain extended information for property: 'valueSet'
	 */
	_valueSet?: Element;
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed
 * From: datarequirement.xml
 */
export interface DataRequirementDateFilter extends Element {
	/**
	 * The date-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type date, dateTime, Period, Schedule, or Timing
	 */
	path?: string;
	/**
	 * May contain extended information for property: 'path'
	 */
	_path?: Element;
	/**
	 * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing
	 */
	searchParam?: string;
	/**
	 * May contain extended information for property: 'searchParam'
	 */
	_searchParam?: Element;
	/**
	 * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now
	 */
	valueDateTime?: dateTime;
	/**
	 * May contain extended information for property: 'valueDateTime'
	 */
	_valueDateTime?: Element;
	/**
	 * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now
	 */
	valueDuration?: Duration;
	/**
	 * May contain extended information for property: 'valueDuration'
	 */
	_valueDuration?: Element;
	/**
	 * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now
	 */
	valuePeriod?: Period;
	/**
	 * May contain extended information for property: 'valuePeriod'
	 */
	_valuePeriod?: Element;
}
/**
 * Specifies the order of the results to be returned
 * From: datarequirement.xml
 */
export interface DataRequirementSort extends Element {
	/**
	 * The direction of the sort, ascending or descending
	 */
	direction: code;
	/**
	 * May contain extended information for property: 'direction'
	 */
	_direction?: Element;
	/**
	 * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant
	 */
	path: string;
	/**
	 * May contain extended information for property: 'path'
	 */
	_path?: Element;
}
/**
 * Base definition for all elements in a resource
 * From: element.xml
 */
export interface Element {
	/**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension
	 */
	extension?: Extension[];
	/**
	 * May contain extended information for property: 'extension'
	 */
	_extension?: Element[];
	/**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces
	 */
	id?: string;
	/**
	 * May contain extended information for property: 'id'
	 */
	_id?: Element;
}
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used
 * From: expression.xml
 */
export interface Expression extends Element {
	/**
	 * A brief, natural language description of the condition that effectively communicates the intended semantics 
	 */
	description?: string;
	/**
	 * May contain extended information for property: 'description'
	 */
	_description?: Element;
	/**
	 * An expression in the specified language that returns a value
	 */
	expression?: string;
	/**
	 * May contain extended information for property: 'expression'
	 */
	_expression?: Element;
	/**
	 * The media type of the language for the expression
	 */
	language: code;
	/**
	 * May contain extended information for property: 'language'
	 */
	_language?: Element;
	/**
	 * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined
	 */
	name?: id;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
	/**
	 * A URI that defines where the expression is found
	 */
	reference?: uri;
	/**
	 * May contain extended information for property: 'reference'
	 */
	_reference?: Element;
}
/**
 * Optional Extension Element - found in all resources
 * From: extension.xml
 */
export interface Extension extends Element {
	/**
	 * Source of the definition for the extension code - a logical name or a URL
	 */
	url: uri;
	/**
	 * May contain extended information for property: 'url'
	 */
	_url?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueActionDefinition?: Structure;
	/**
	 * May contain extended information for property: 'valueActionDefinition'
	 */
	_valueActionDefinition?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueActionDefinitionBehavior?: Element;
	/**
	 * May contain extended information for property: 'valueActionDefinitionBehavior'
	 */
	_valueActionDefinitionBehavior?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueActionDefinitionCustomization?: Element;
	/**
	 * May contain extended information for property: 'valueActionDefinitionCustomization'
	 */
	_valueActionDefinitionCustomization?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueActionDefinitionRelatedAction?: Element;
	/**
	 * May contain extended information for property: 'valueActionDefinitionRelatedAction'
	 */
	_valueActionDefinitionRelatedAction?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueAddress?: Address;
	/**
	 * May contain extended information for property: 'valueAddress'
	 */
	_valueAddress?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueAge?: Quantity;
	/**
	 * May contain extended information for property: 'valueAge'
	 */
	_valueAge?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueAnnotation?: Annotation;
	/**
	 * May contain extended information for property: 'valueAnnotation'
	 */
	_valueAnnotation?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueAttachment?: Attachment;
	/**
	 * May contain extended information for property: 'valueAttachment'
	 */
	_valueAttachment?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueBackboneElement?: Element;
	/**
	 * May contain extended information for property: 'valueBackboneElement'
	 */
	_valueBackboneElement?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueBase64Binary?: string;
	/**
	 * May contain extended information for property: 'valueBase64Binary'
	 */
	_valueBase64Binary?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueBoolean?: boolean;
	/**
	 * May contain extended information for property: 'valueBoolean'
	 */
	_valueBoolean?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueCanonical?: string;
	/**
	 * May contain extended information for property: 'valueCanonical'
	 */
	_valueCanonical?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueCode?: string;
	/**
	 * May contain extended information for property: 'valueCode'
	 */
	_valueCode?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueCodeableConcept?: CodeableConcept;
	/**
	 * May contain extended information for property: 'valueCodeableConcept'
	 */
	_valueCodeableConcept?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueCoding?: Coding;
	/**
	 * May contain extended information for property: 'valueCoding'
	 */
	_valueCoding?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueContactDetail?: ContactDetail;
	/**
	 * May contain extended information for property: 'valueContactDetail'
	 */
	_valueContactDetail?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueContactPoint?: ContactPoint;
	/**
	 * May contain extended information for property: 'valueContactPoint'
	 */
	_valueContactPoint?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueContributor?: Contributor;
	/**
	 * May contain extended information for property: 'valueContributor'
	 */
	_valueContributor?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueCount?: Quantity;
	/**
	 * May contain extended information for property: 'valueCount'
	 */
	_valueCount?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDataRequirement?: DataRequirement;
	/**
	 * May contain extended information for property: 'valueDataRequirement'
	 */
	_valueDataRequirement?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDataRequirementCodeFilter?: Element;
	/**
	 * May contain extended information for property: 'valueDataRequirementCodeFilter'
	 */
	_valueDataRequirementCodeFilter?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDataRequirementDateFilter?: Element;
	/**
	 * May contain extended information for property: 'valueDataRequirementDateFilter'
	 */
	_valueDataRequirementDateFilter?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDataRequirementSort?: Element;
	/**
	 * May contain extended information for property: 'valueDataRequirementSort'
	 */
	_valueDataRequirementSort?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDate?: string;
	/**
	 * May contain extended information for property: 'valueDate'
	 */
	_valueDate?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDateTime?: string;
	/**
	 * May contain extended information for property: 'valueDateTime'
	 */
	_valueDateTime?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDecimal?: number;
	/**
	 * May contain extended information for property: 'valueDecimal'
	 */
	_valueDecimal?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDistance?: Quantity;
	/**
	 * May contain extended information for property: 'valueDistance'
	 */
	_valueDistance?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDosage?: BackboneElement;
	/**
	 * May contain extended information for property: 'valueDosage'
	 */
	_valueDosage?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDosageDoseAndRate?: Element;
	/**
	 * May contain extended information for property: 'valueDosageDoseAndRate'
	 */
	_valueDosageDoseAndRate?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueDuration?: Quantity;
	/**
	 * May contain extended information for property: 'valueDuration'
	 */
	_valueDuration?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinition?: BackboneElement;
	/**
	 * May contain extended information for property: 'valueElementDefinition'
	 */
	_valueElementDefinition?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinitionBase?: Element;
	/**
	 * May contain extended information for property: 'valueElementDefinitionBase'
	 */
	_valueElementDefinitionBase?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinitionBinding?: Element;
	/**
	 * May contain extended information for property: 'valueElementDefinitionBinding'
	 */
	_valueElementDefinitionBinding?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinitionConstraint?: Element;
	/**
	 * May contain extended information for property: 'valueElementDefinitionConstraint'
	 */
	_valueElementDefinitionConstraint?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinitionExample?: Element;
	/**
	 * May contain extended information for property: 'valueElementDefinitionExample'
	 */
	_valueElementDefinitionExample?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinitionMapping?: Element;
	/**
	 * May contain extended information for property: 'valueElementDefinitionMapping'
	 */
	_valueElementDefinitionMapping?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinitionSlicing?: Element;
	/**
	 * May contain extended information for property: 'valueElementDefinitionSlicing'
	 */
	_valueElementDefinitionSlicing?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinitionSlicingDiscriminator?: Element;
	/**
	 * May contain extended information for property: 'valueElementDefinitionSlicingDiscriminator'
	 */
	_valueElementDefinitionSlicingDiscriminator?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueElementDefinitionType?: Element;
	/**
	 * May contain extended information for property: 'valueElementDefinitionType'
	 */
	_valueElementDefinitionType?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueExpression?: Element;
	/**
	 * May contain extended information for property: 'valueExpression'
	 */
	_valueExpression?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueExtension?: Extension;
	/**
	 * May contain extended information for property: 'valueExtension'
	 */
	_valueExtension?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueHumanName?: HumanName;
	/**
	 * May contain extended information for property: 'valueHumanName'
	 */
	_valueHumanName?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueId?: string;
	/**
	 * May contain extended information for property: 'valueId'
	 */
	_valueId?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueIdentifier?: Identifier;
	/**
	 * May contain extended information for property: 'valueIdentifier'
	 */
	_valueIdentifier?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueInstant?: string;
	/**
	 * May contain extended information for property: 'valueInstant'
	 */
	_valueInstant?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueInteger?: number;
	/**
	 * May contain extended information for property: 'valueInteger'
	 */
	_valueInteger?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueMarkdown?: string;
	/**
	 * May contain extended information for property: 'valueMarkdown'
	 */
	_valueMarkdown?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueMarketingStatus?: BackboneElement;
	/**
	 * May contain extended information for property: 'valueMarketingStatus'
	 */
	_valueMarketingStatus?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueMeta?: Element;
	/**
	 * May contain extended information for property: 'valueMeta'
	 */
	_valueMeta?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueModuleMetadata?: ModuleMetadata;
	/**
	 * May contain extended information for property: 'valueModuleMetadata'
	 */
	_valueModuleMetadata?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueMoney?: Money;
	/**
	 * May contain extended information for property: 'valueMoney'
	 */
	_valueMoney?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueNarrative?: Narrative;
	/**
	 * May contain extended information for property: 'valueNarrative'
	 */
	_valueNarrative?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueOid?: string;
	/**
	 * May contain extended information for property: 'valueOid'
	 */
	_valueOid?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueParameterDefinition?: ParameterDefinition;
	/**
	 * May contain extended information for property: 'valueParameterDefinition'
	 */
	_valueParameterDefinition?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valuePeriod?: Period;
	/**
	 * May contain extended information for property: 'valuePeriod'
	 */
	_valuePeriod?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valuePopulation?: BackboneElement;
	/**
	 * May contain extended information for property: 'valuePopulation'
	 */
	_valuePopulation?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valuePositiveInt?: number;
	/**
	 * May contain extended information for property: 'valuePositiveInt'
	 */
	_valuePositiveInt?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueProdCharacteristic?: BackboneElement;
	/**
	 * May contain extended information for property: 'valueProdCharacteristic'
	 */
	_valueProdCharacteristic?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueProductShelfLife?: BackboneElement;
	/**
	 * May contain extended information for property: 'valueProductShelfLife'
	 */
	_valueProductShelfLife?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueQuantity?: Quantity;
	/**
	 * May contain extended information for property: 'valueQuantity'
	 */
	_valueQuantity?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueRange?: Range;
	/**
	 * May contain extended information for property: 'valueRange'
	 */
	_valueRange?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueRatio?: Ratio;
	/**
	 * May contain extended information for property: 'valueRatio'
	 */
	_valueRatio?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueReference?: Reference;
	/**
	 * May contain extended information for property: 'valueReference'
	 */
	_valueReference?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueRelatedArtifact?: RelatedArtifact;
	/**
	 * May contain extended information for property: 'valueRelatedArtifact'
	 */
	_valueRelatedArtifact?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueSampledData?: SampledData;
	/**
	 * May contain extended information for property: 'valueSampledData'
	 */
	_valueSampledData?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueSignature?: Signature;
	/**
	 * May contain extended information for property: 'valueSignature'
	 */
	_valueSignature?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueString?: string;
	/**
	 * May contain extended information for property: 'valueString'
	 */
	_valueString?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueSubstanceAmount?: BackboneElement;
	/**
	 * May contain extended information for property: 'valueSubstanceAmount'
	 */
	_valueSubstanceAmount?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueSubstanceAmountReferenceRange?: Element;
	/**
	 * May contain extended information for property: 'valueSubstanceAmountReferenceRange'
	 */
	_valueSubstanceAmountReferenceRange?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueSubstanceMoiety?: BackboneElement;
	/**
	 * May contain extended information for property: 'valueSubstanceMoiety'
	 */
	_valueSubstanceMoiety?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueTime?: string;
	/**
	 * May contain extended information for property: 'valueTime'
	 */
	_valueTime?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueTiming?: BackboneElement;
	/**
	 * May contain extended information for property: 'valueTiming'
	 */
	_valueTiming?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueTimingRepeat?: Element;
	/**
	 * May contain extended information for property: 'valueTimingRepeat'
	 */
	_valueTimingRepeat?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueTriggerDefinition?: TriggerDefinition;
	/**
	 * May contain extended information for property: 'valueTriggerDefinition'
	 */
	_valueTriggerDefinition?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueUnsignedInt?: number;
	/**
	 * May contain extended information for property: 'valueUnsignedInt'
	 */
	_valueUnsignedInt?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueUri?: string;
	/**
	 * May contain extended information for property: 'valueUri'
	 */
	_valueUri?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueUrl?: string;
	/**
	 * May contain extended information for property: 'valueUrl'
	 */
	_valueUrl?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueUsageContext?: UsageContext;
	/**
	 * May contain extended information for property: 'valueUsageContext'
	 */
	_valueUsageContext?: Element;
	/**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list)
	 */
	valueUuid?: string;
	/**
	 * May contain extended information for property: 'valueUuid'
	 */
	_valueUuid?: Element;
}
/**
 * A human's name with the ability to identify parts and usage
 * From: humanname.xml
 */
export interface HumanName extends Element {
	/**
	 * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
	 */
	family?: string;
	/**
	 * May contain extended information for property: 'family'
	 */
	_family?: Element;
	/**
	 * Given name
	 */
	given?: string[];
	/**
	 * May contain extended information for property: 'given'
	 */
	_given?: Element[];
	/**
	 * Indicates the period of time when this name was valid for the named person.
	 */
	period?: Period;
	/**
	 * May contain extended information for property: 'period'
	 */
	_period?: Element;
	/**
	 * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name
	 */
	prefix?: string[];
	/**
	 * May contain extended information for property: 'prefix'
	 */
	_prefix?: Element[];
	/**
	 * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name
	 */
	suffix?: string[];
	/**
	 * May contain extended information for property: 'suffix'
	 */
	_suffix?: Element[];
	/**
	 * Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts
	 */
	text?: string;
	/**
	 * May contain extended information for property: 'text'
	 */
	_text?: Element;
	/**
	 * Identifies the purpose for this name
	 */
	use?: code;
	/**
	 * May contain extended information for property: 'use'
	 */
	_use?: Element;
}
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers
 * From: identifier.xml
 */
export interface Identifier extends Element {
	/**
	 * Organization that issued/manages the identifier
	 */
	assigner?: Reference;
	/**
	 * May contain extended information for property: 'assigner'
	 */
	_assigner?: Element;
	/**
	 * Time period during which identifier is/was valid for use
	 */
	period?: Period;
	/**
	 * May contain extended information for property: 'period'
	 */
	_period?: Element;
	/**
	 * Establishes the namespace for the value - that is, a URL that describes a set values that are unique.
	 */
	system?: uri;
	/**
	 * May contain extended information for property: 'system'
	 */
	_system?: Element;
	/**
	 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose
	 */
	type?: CodeableConcept;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
	/**
	 * The purpose of this identifier
	 */
	use?: code;
	/**
	 * May contain extended information for property: 'use'
	 */
	_use?: Element;
	/**
	 * The portion of the identifier typically relevant to the user and which is unique within the context of the system
	 */
	value?: string;
	/**
	 * May contain extended information for property: 'value'
	 */
	_value?: Element;
}
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource
 * From: meta.xml
 */
export interface Meta extends Element {
	/**
	 * When the resource last changed - e.g. when the version changed
	 */
	lastUpdated?: instant;
	/**
	 * May contain extended information for property: 'lastUpdated'
	 */
	_lastUpdated?: Element;
	/**
	 * A list of profiles (references to [[[StructureDefinition]]] resources) that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]]
	 */
	profile?: canonical[];
	/**
	 * May contain extended information for property: 'profile'
	 */
	_profile?: Element[];
	/**
	 * Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure
	 */
	security?: Coding[];
	/**
	 * May contain extended information for property: 'security'
	 */
	_security?: Element[];
	/**
	 * A uri that identifies the source system of the resource. This provides a minimal amount of [[[Provenance]]] information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.
	 */
	source?: uri;
	/**
	 * May contain extended information for property: 'source'
	 */
	_source?: Element;
	/**
	 * Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource
	 */
	tag?: Coding[];
	/**
	 * May contain extended information for property: 'tag'
	 */
	_tag?: Element[];
	/**
	 * The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted
	 */
	versionId?: id;
	/**
	 * May contain extended information for property: 'versionId'
	 */
	_versionId?: Element;
}
/**
 * The ModuleMetadata structure defines the common metadata elements used by quality improvement artifacts. This information includes descriptive and topical metadata to enable repository searches, as well as governance and evidentiary support information
 * From: modulemetadata.xml
 */
export interface ModuleMetadata extends Element {
	/**
	 * Contact details to assist a user in finding and communicating with the publisher
	 */
	contact?: ContactDetail[];
	/**
	 * May contain extended information for property: 'contact'
	 */
	_contact?: Element[];
	/**
	 * A contributor to the content of the module, including authors, editors, reviewers, and endorsers
	 */
	contributor?: Contributor[];
	/**
	 * May contain extended information for property: 'contributor'
	 */
	_contributor?: Element[];
	/**
	 * A copyright statement relating to the module and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the module
	 */
	copyright?: string;
	/**
	 * May contain extended information for property: 'copyright'
	 */
	_copyright?: Element;
	/**
	 * Specifies various attributes of the patient population for whom and/or environment of care in which the knowledge module is applicable
	 */
	coverage?: UsageContext[];
	/**
	 * May contain extended information for property: 'coverage'
	 */
	_coverage?: Element[];
	/**
	 * A free text natural language description of the module from the consumer's perspective
	 */
	description?: string;
	/**
	 * May contain extended information for property: 'description'
	 */
	_description?: Element;
	/**
	 * The period during which the module content is effective
	 */
	effectivePeriod?: Period;
	/**
	 * May contain extended information for property: 'effectivePeriod'
	 */
	_effectivePeriod?: Element;
	/**
	 * Determines whether the module was developed for testing purposes (or education/evaluation/marketing), and is not intended to be used in production environments
	 */
	experimental?: boolean;
	/**
	 * May contain extended information for property: 'experimental'
	 */
	_experimental?: Element;
	/**
	 * A logical identifier for the module such as the CMS or NQF identifiers for a measure artifact. Note that at least one identifier is required for non-experimental active artifacts
	 */
	identifier?: Identifier[];
	/**
	 * May contain extended information for property: 'identifier'
	 */
	_identifier?: Element[];
	/**
	 * The date on which the module content was last reviewed
	 */
	lastReviewDate?: date;
	/**
	 * May contain extended information for property: 'lastReviewDate'
	 */
	_lastReviewDate?: Element;
	/**
	 * A machine-friendly name for the module. This name should be usable as an identifier for the module by machine processing applications such as code generation
	 */
	name?: string;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
	/**
	 * The date on which the module was published
	 */
	publicationDate?: date;
	/**
	 * May contain extended information for property: 'publicationDate'
	 */
	_publicationDate?: Element;
	/**
	 * The name of the individual or organization that published the module (also known as the steward for the module). This information is required for non-experimental published artifacts
	 */
	publisher?: string;
	/**
	 * May contain extended information for property: 'publisher'
	 */
	_publisher?: Element;
	/**
	 * A brief description of the purpose of the module
	 */
	purpose?: string;
	/**
	 * May contain extended information for property: 'purpose'
	 */
	_purpose?: Element;
	/**
	 * Related resources such as additional documentation, justification, or bibliographic references
	 */
	relatedArtifact?: RelatedArtifact[];
	/**
	 * May contain extended information for property: 'relatedArtifact'
	 */
	_relatedArtifact?: Element[];
	/**
	 * The status of the module
	 */
	status: code;
	/**
	 * May contain extended information for property: 'status'
	 */
	_status?: Element;
	/**
	 * A short, descriptive, user-friendly title for the module
	 */
	title?: string;
	/**
	 * May contain extended information for property: 'title'
	 */
	_title?: Element;
	/**
	 * Clinical topics related to the content of the module
	 */
	topic?: CodeableConcept[];
	/**
	 * May contain extended information for property: 'topic'
	 */
	_topic?: Element[];
	/**
	 * Identifies the type of knowledge module, such as a rule, library, documentation template, or measure
	 */
	type: code;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
	/**
	 * An absolute URL that is used to identify this module when it is referenced. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this module definition is (or will be) published
	 */
	url?: uri;
	/**
	 * May contain extended information for property: 'url'
	 */
	_url?: Element;
	/**
	 * A detailed description of how the module is used from a clinical perspective
	 */
	usage?: string;
	/**
	 * May contain extended information for property: 'usage'
	 */
	_usage?: Element;
	/**
	 * The version of the module, if any. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge modules, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts
	 */
	version?: string;
	/**
	 * May contain extended information for property: 'version'
	 */
	_version?: Element;
}
/**
 * An amount of economic utility in some recognized currency
 * From: money.xml
 */
export interface Money extends Element {
	/**
	 * ISO 4217 Currency Code
	 */
	currency?: code;
	/**
	 * May contain extended information for property: 'currency'
	 */
	_currency?: Element;
	/**
	 * Numerical value (with implicit precision)
	 */
	value?: decimal;
	/**
	 * May contain extended information for property: 'value'
	 */
	_value?: Element;
}
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource
 * From: narrative.xml
 */
export interface Narrative extends Element {
	/**
	 * The actual narrative content, a stripped down version of XHTML
	 */
	div: xhtml;
	/**
	 * May contain extended information for property: 'div'
	 */
	_div?: Element;
	/**
	 * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data
	 */
	status: code;
	/**
	 * May contain extended information for property: 'status'
	 */
	_status?: Element;
}
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse
 * From: parameterdefinition.xml
 */
export interface ParameterDefinition extends Element {
	/**
	 * A brief discussion of what the parameter is for and how it is used by the module
	 */
	documentation?: string;
	/**
	 * May contain extended information for property: 'documentation'
	 */
	_documentation?: Element;
	/**
	 * The maximum number of times this element is permitted to appear in the request or response
	 */
	max?: string;
	/**
	 * May contain extended information for property: 'max'
	 */
	_max?: Element;
	/**
	 * The minimum number of times this parameter SHALL appear in the request or response
	 */
	min?: integer;
	/**
	 * May contain extended information for property: 'min'
	 */
	_min?: Element;
	/**
	 * The name of the parameter used to allow access to the value of the parameter in evaluation contexts
	 */
	name?: code;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
	/**
	 * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to
	 */
	profile?: canonical;
	/**
	 * May contain extended information for property: 'profile'
	 */
	_profile?: Element;
	/**
	 * The type of the parameter
	 */
	type: code;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
	/**
	 * Whether the parameter is input or output for the module
	 */
	use: code;
	/**
	 * May contain extended information for property: 'use'
	 */
	_use?: Element;
}
/**
 * A time period defined by a start and end date and optionally time.
 * From: period.xml
 */
export interface Period extends Element {
	/**
	 * The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time
	 */
	end?: dateTime;
	/**
	 * May contain extended information for property: 'end'
	 */
	_end?: Element;
	/**
	 * The start of the period. The boundary is inclusive.
	 */
	start?: dateTime;
	/**
	 * May contain extended information for property: 'start'
	 */
	_start?: Element;
}
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies
 * From: quantity.xml
 */
export interface Quantity extends Element {
	/**
	 * A computer processable form of the unit in some unit representation system
	 */
	code?: code;
	/**
	 * May contain extended information for property: 'code'
	 */
	_code?: Element;
	/**
	 * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value
	 */
	comparator?: code;
	/**
	 * May contain extended information for property: 'comparator'
	 */
	_comparator?: Element;
	/**
	 * The identification of the system that provides the coded form of the unit
	 */
	system?: uri;
	/**
	 * May contain extended information for property: 'system'
	 */
	_system?: Element;
	/**
	 * A human-readable form of the unit
	 */
	unit?: string;
	/**
	 * May contain extended information for property: 'unit'
	 */
	_unit?: Element;
	/**
	 * The value of the measured amount. The value includes an implicit precision in the presentation of the value
	 */
	value?: decimal;
	/**
	 * May contain extended information for property: 'value'
	 */
	_value?: Element;
}
/**
 * A set of ordered Quantities defined by a low and high limit. 
 * From: range.xml
 */
export interface Range extends Element {
	/**
	 * The high limit. The boundary is inclusive. 
	 */
	high?: SimpleQuantity;
	/**
	 * May contain extended information for property: 'high'
	 */
	_high?: Element;
	/**
	 * The low limit. The boundary is inclusive.
	 */
	low?: SimpleQuantity;
	/**
	 * May contain extended information for property: 'low'
	 */
	_low?: Element;
}
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator. 
 * From: ratio.xml
 */
export interface Ratio extends Element {
	/**
	 * The value of the denominator
	 */
	denominator?: Quantity;
	/**
	 * May contain extended information for property: 'denominator'
	 */
	_denominator?: Element;
	/**
	 * The value of the numerator
	 */
	numerator?: Quantity;
	/**
	 * May contain extended information for property: 'numerator'
	 */
	_numerator?: Element;
}
/**
 * A reference from one resource to another
 * From: reference.xml
 */
export interface Reference extends Element {
	/**
	 * Plain text narrative that identifies the resource in addition to the resource reference 
	 */
	display?: string;
	/**
	 * May contain extended information for property: 'display'
	 */
	_display?: Element;
	/**
	 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference
	 */
	identifier?: Identifier;
	/**
	 * May contain extended information for property: 'identifier'
	 */
	_identifier?: Element;
	/**
	 * A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources
	 */
	reference?: string;
	/**
	 * May contain extended information for property: 'reference'
	 */
	_reference?: Element;
	/**
	 * The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent.

The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources)
	 */
	type?: uri;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
}
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references
 * From: relatedartifact.xml
 */
export interface RelatedArtifact extends Element {
	/**
	 * A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format
	 */
	citation?: markdown;
	/**
	 * May contain extended information for property: 'citation'
	 */
	_citation?: Element;
	/**
	 * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer
	 */
	display?: string;
	/**
	 * May contain extended information for property: 'display'
	 */
	_display?: Element;
	/**
	 * The document being referenced, represented as an attachment. This is exclusive with the resource element
	 */
	document?: Attachment;
	/**
	 * May contain extended information for property: 'document'
	 */
	_document?: Element;
	/**
	 * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index
	 */
	label?: string;
	/**
	 * May contain extended information for property: 'label'
	 */
	_label?: Element;
	/**
	 * The related resource, such as a library, value set, profile, or other knowledge resource
	 */
	resource?: canonical;
	/**
	 * May contain extended information for property: 'resource'
	 */
	_resource?: Element;
	/**
	 * The type of relationship to the related artifact
	 */
	type: code;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
	/**
	 * A url for the artifact that can be followed to access the actual content
	 */
	url?: url;
	/**
	 * May contain extended information for property: 'url'
	 */
	_url?: Element;
}
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data
 * From: sampleddata.xml
 */
export interface SampledData extends Element {
	/**
	 * A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value
	 */
	data?: string;
	/**
	 * May contain extended information for property: 'data'
	 */
	_data?: Element;
	/**
	 * The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once
	 */
	dimensions: positiveInt;
	/**
	 * May contain extended information for property: 'dimensions'
	 */
	_dimensions?: Element;
	/**
	 * A correction factor that is applied to the sampled data points before they are added to the origin
	 */
	factor?: decimal;
	/**
	 * May contain extended information for property: 'factor'
	 */
	_factor?: Element;
	/**
	 * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit)
	 */
	lowerLimit?: decimal;
	/**
	 * May contain extended information for property: 'lowerLimit'
	 */
	_lowerLimit?: Element;
	/**
	 * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series
	 */
	origin: SimpleQuantity;
	/**
	 * May contain extended information for property: 'origin'
	 */
	_origin?: Element;
	/**
	 * The length of time between sampling times, measured in milliseconds
	 */
	period: decimal;
	/**
	 * May contain extended information for property: 'period'
	 */
	_period?: Element;
	/**
	 * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit)
	 */
	upperLimit?: decimal;
	/**
	 * May contain extended information for property: 'upperLimit'
	 */
	_upperLimit?: Element;
}
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 * From: signature.xml
 */
export interface Signature extends Element {
	/**
	 * The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.
	 */
	data?: base64Binary;
	/**
	 * May contain extended information for property: 'data'
	 */
	_data?: Element;
	/**
	 * A reference to an application-usable description of the identity that is represented by the signature.
	 */
	onBehalfOf?: Reference;
	/**
	 * May contain extended information for property: 'onBehalfOf'
	 */
	_onBehalfOf?: Element;
	/**
	 * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
	 */
	sigFormat?: code;
	/**
	 * May contain extended information for property: 'sigFormat'
	 */
	_sigFormat?: Element;
	/**
	 * A mime type that indicates the technical format of the target resources signed by the signature.
	 */
	targetFormat?: code;
	/**
	 * May contain extended information for property: 'targetFormat'
	 */
	_targetFormat?: Element;
	/**
	 * An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document. 
	 */
	type: Coding[];
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element[];
	/**
	 * When the digital signature was signed. 
	 */
	when: instant;
	/**
	 * May contain extended information for property: 'when'
	 */
	_when?: Element;
	/**
	 * A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key)
	 */
	who: Reference;
	/**
	 * May contain extended information for property: 'who'
	 */
	_who?: Element;
}
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out
 * From: timing.xml
 */
export interface Timing extends BackboneElement {
	/**
	 * A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code)
	 */
	code?: CodeableConcept;
	/**
	 * May contain extended information for property: 'code'
	 */
	_code?: Element;
	/**
	 * Identifies specific times when the event occurs
	 */
	event?: dateTime[];
	/**
	 * May contain extended information for property: 'event'
	 */
	_event?: Element[];
	/**
	 * A set of rules that describe when the event is scheduled
	 */
	repeat?: TimingRepeat;
	/**
	 * May contain extended information for property: 'repeat'
	 */
	_repeat?: Element;
}
/**
 * A set of rules that describe when the event is scheduled
 * From: timing.xml
 */
export interface TimingRepeat extends Element {
	/**
	 * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule
	 */
	boundsDuration?: Duration;
	/**
	 * May contain extended information for property: 'boundsDuration'
	 */
	_boundsDuration?: Element;
	/**
	 * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule
	 */
	boundsPeriod?: Period;
	/**
	 * May contain extended information for property: 'boundsPeriod'
	 */
	_boundsPeriod?: Element;
	/**
	 * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule
	 */
	boundsRange?: Range;
	/**
	 * May contain extended information for property: 'boundsRange'
	 */
	_boundsRange?: Element;
	/**
	 * A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values
	 */
	count?: positiveInt;
	/**
	 * May contain extended information for property: 'count'
	 */
	_count?: Element;
	/**
	 * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times
	 */
	countMax?: positiveInt;
	/**
	 * May contain extended information for property: 'countMax'
	 */
	_countMax?: Element;
	/**
	 * If one or more days of week is provided, then the action happens only on the specified day(s)
	 */
	dayOfWeek?: code[];
	/**
	 * May contain extended information for property: 'dayOfWeek'
	 */
	_dayOfWeek?: Element[];
	/**
	 * How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration
	 */
	duration?: decimal;
	/**
	 * May contain extended information for property: 'duration'
	 */
	_duration?: Element;
	/**
	 * If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length
	 */
	durationMax?: decimal;
	/**
	 * May contain extended information for property: 'durationMax'
	 */
	_durationMax?: Element;
	/**
	 * The units of time for the duration, in UCUM units
	 */
	durationUnit?: code;
	/**
	 * May contain extended information for property: 'durationUnit'
	 */
	_durationUnit?: Element;
	/**
	 * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency
	 */
	frequency?: positiveInt;
	/**
	 * May contain extended information for property: 'frequency'
	 */
	_frequency?: Element;
	/**
	 * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range
	 */
	frequencyMax?: positiveInt;
	/**
	 * May contain extended information for property: 'frequencyMax'
	 */
	_frequencyMax?: Element;
	/**
	 * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event
	 */
	offset?: unsignedInt;
	/**
	 * May contain extended information for property: 'offset'
	 */
	_offset?: Element;
	/**
	 * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length
	 */
	period?: decimal;
	/**
	 * May contain extended information for property: 'period'
	 */
	_period?: Element;
	/**
	 * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days
	 */
	periodMax?: decimal;
	/**
	 * May contain extended information for property: 'periodMax'
	 */
	_periodMax?: Element;
	/**
	 * The units of time for the period in UCUM units
	 */
	periodUnit?: code;
	/**
	 * May contain extended information for property: 'periodUnit'
	 */
	_periodUnit?: Element;
	/**
	 * Specified time of day for action to take place
	 */
	timeOfDay?: time[];
	/**
	 * May contain extended information for property: 'timeOfDay'
	 */
	_timeOfDay?: Element[];
	/**
	 * An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur
	 */
	when?: code[];
	/**
	 * May contain extended information for property: 'when'
	 */
	_when?: Element[];
}
/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element
 * From: triggerdefinition.xml
 */
export interface TriggerDefinition extends Element {
	/**
	 * A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires
	 */
	condition?: Expression;
	/**
	 * May contain extended information for property: 'condition'
	 */
	_condition?: Element;
	/**
	 * The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true
	 */
	data?: DataRequirement[];
	/**
	 * May contain extended information for property: 'data'
	 */
	_data?: Element[];
	/**
	 * A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context
	 */
	name?: string;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
	/**
	 * The timing of the event (if this is a periodic trigger)
	 */
	timingDate?: date;
	/**
	 * May contain extended information for property: 'timingDate'
	 */
	_timingDate?: Element;
	/**
	 * The timing of the event (if this is a periodic trigger)
	 */
	timingDateTime?: dateTime;
	/**
	 * May contain extended information for property: 'timingDateTime'
	 */
	_timingDateTime?: Element;
	/**
	 * The timing of the event (if this is a periodic trigger)
	 */
	timingReference?: Reference;
	/**
	 * May contain extended information for property: 'timingReference'
	 */
	_timingReference?: Element;
	/**
	 * The timing of the event (if this is a periodic trigger)
	 */
	timingTiming?: Timing;
	/**
	 * May contain extended information for property: 'timingTiming'
	 */
	_timingTiming?: Element;
	/**
	 * The type of triggering event
	 */
	type: code;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
}
/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care)
 * From: usagecontext.xml
 */
export interface UsageContext extends Element {
	/**
	 * A code that identifies the type of context being specified by this usage context
	 */
	code: Coding;
	/**
	 * May contain extended information for property: 'code'
	 */
	_code?: Element;
	/**
	 * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code
	 */
	valueCodeableConcept: CodeableConcept;
	/**
	 * May contain extended information for property: 'valueCodeableConcept'
	 */
	_valueCodeableConcept?: Element;
	/**
	 * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code
	 */
	valueQuantity: Quantity;
	/**
	 * May contain extended information for property: 'valueQuantity'
	 */
	_valueQuantity?: Element;
	/**
	 * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code
	 */
	valueRange: Range;
	/**
	 * May contain extended information for property: 'valueRange'
	 */
	_valueRange?: Element;
	/**
	 * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code
	 */
	valueReference: Reference;
	/**
	 * May contain extended information for property: 'valueReference'
	 */
	_valueReference?: Element;
}
/**
 * A resource that includes narrative, extensions, and contained resources.
 * From: domainresource-spreadsheet.xml
 */
export interface DomainResource extends Resource {
	/**
	 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope
	 */
	contained?: Resource[];
	/**
	 * May contain extended information for property: 'contained'
	 */
	_contained?: Element[];
	/**
	 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension
	 */
	extension?: Extension[];
	/**
	 * May contain extended information for property: 'extension'
	 */
	_extension?: Element[];
	/**
	 * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself)
	 */
	modifierExtension?: Extension[];
	/**
	 * May contain extended information for property: 'modifierExtension'
	 */
	_modifierExtension?: Element[];
	/**
	 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety
	 */
	text?: Narrative;
	/**
	 * May contain extended information for property: 'text'
	 */
	_text?: Element;
}
/**
 * This is the base resource type for everything.
 * From: resource-spreadsheet.xml
 */
export interface Resource {
	/**
	 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes
	 */
	id?: id;
	/**
	 * May contain extended information for property: 'id'
	 */
	_id?: Element;
	/**
	 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
	 */
	implicitRules?: uri;
	/**
	 * May contain extended information for property: 'implicitRules'
	 */
	_implicitRules?: Element;
	/**
	 * The base language in which the resource is written
	 */
	language?: code;
	/**
	 * May contain extended information for property: 'language'
	 */
	_language?: Element;
	/**
	 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource
	 */
	meta?: Meta;
	/**
	 * May contain extended information for property: 'meta'
	 */
	_meta?: Element;
}
/**
 * WARN: SimpleQuantity definition cannot be found!
 * From: definition-file-not-found.xml
 */
export type SimpleQuantity = Quantity;
/**
 * WARN: Structure definition cannot be found!
 * From: definition-file-not-found.xml
 */
export type Structure = Element;
/**
 * The subscription resource describes a particular client's request to be notified about a Topic
 * From: subscription-spreadsheet.xml
 */
export interface Subscription extends DomainResource {
	/**
	 * Details where to send notifications when resources are received that meet the criteria
	 */
	channel: SubscriptionChannel;
	/**
	 * May contain extended information for property: 'channel'
	 */
	_channel?: Element;
	/**
	 * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting
	 */
	contact?: ContactPoint[];
	/**
	 * May contain extended information for property: 'contact'
	 */
	_contact?: Element[];
	/**
	 * The time for the server to turn the subscription off
	 */
	end?: instant;
	/**
	 * May contain extended information for property: 'end'
	 */
	_end?: Element;
	/**
	 * A record of the last error that occurred when the server processed a notification
	 */
	error?: CodeableConcept[];
	/**
	 * May contain extended information for property: 'error'
	 */
	_error?: Element[];
	/**
	 * A record of  the number of events for which the server has attempted delivery on this subscription (i.e., the number of events that occurred while the subscription is in an "active" or "error" state -- not "requested" or "off").   Server Initializes to 0 for a new subscription.  Repeated attempts at delivery of the *same* event notification do not increment this counter.
	 */
	eventCount?: positiveInt;
	/**
	 * May contain extended information for property: 'eventCount'
	 */
	_eventCount?: Element;
	/**
	 * The filter properties to be applied to narrow the topic stream.  When multiple filters are applied, evaluates to true if all the conditions are met; otherwise it returns false.   (i.e., logical AND)
	 */
	filterBy?: SubscriptionFilterBy[];
	/**
	 * May contain extended information for property: 'filterBy'
	 */
	_filterBy?: Element[];
	/**
	 * A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.
	 */
	identifier?: Identifier[];
	/**
	 * May contain extended information for property: 'identifier'
	 */
	_identifier?: Element[];
	/**
	 * A natural language name identifying the subscription.
	 */
	name?: string;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
	/**
	 * A description of why this subscription is defined
	 */
	reason: string;
	/**
	 * May contain extended information for property: 'reason'
	 */
	_reason?: Element;
	/**
	 * The status of the subscription, which marks the server state for managing the subscription
	 */
	status: code;
	/**
	 * May contain extended information for property: 'status'
	 */
	_status?: Element;
	/**
	 * The reference to the topic to be notified about.
	 */
	topic: Reference;
	/**
	 * May contain extended information for property: 'topic'
	 */
	_topic?: Element;
}
/**
 * Details where to send notifications when resources are received that meet the criteria
 * From: subscription-spreadsheet.xml
 */
export interface SubscriptionChannel extends Element {
	/**
	 * The url that describes the actual end-point to send messages to
	 */
	endpoint?: url;
	/**
	 * May contain extended information for property: 'endpoint'
	 */
	_endpoint?: Element;
	/**
	 * Additional headers / information to send as part of the notification
	 */
	header?: string[];
	/**
	 * May contain extended information for property: 'header'
	 */
	_header?: Element[];
	/**
	 * If present,  a 'hearbeat" notification (keepalive) is sent via this channel with an the interval period equal to this elements integer value in seconds.    If not present, a heartbeat notification is not sent.
	 */
	heartbeatPeriod?: positiveInt;
	/**
	 * May contain extended information for property: 'heartbeatPeriod'
	 */
	_heartbeatPeriod?: Element;
	/**
	 * The payload mimetype and content.  If the payload is not present, then there is no payload in the notification, just a notification. 
	 */
	payload?: SubscriptionChannelPayload;
	/**
	 * May contain extended information for property: 'payload'
	 */
	_payload?: Element;
	/**
	 * The type of channel to send notifications on
	 */
	type: CodeableConcept;
	/**
	 * May contain extended information for property: 'type'
	 */
	_type?: Element;
}
/**
 * The payload mimetype and content.  If the payload is not present, then there is no payload in the notification, just a notification. 
 * From: subscription-spreadsheet.xml
 */
export interface SubscriptionChannelPayload extends Element {
	/**
	 * How much of the resource content to deliver in the notification payload. The choices are an empty payload, only the resource id, or the full resource content.
	 */
	content?: code;
	/**
	 * May contain extended information for property: 'content'
	 */
	_content?: Element;
	/**
	 * The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. The mime type "text/plain" may also be used for Email and SMS subscriptions
	 */
	contentType?: code;
	/**
	 * May contain extended information for property: 'contentType'
	 */
	_contentType?: Element;
}
/**
 * The filter properties to be applied to narrow the topic stream.  When multiple filters are applied, evaluates to true if all the conditions are met; otherwise it returns false.   (i.e., logical AND)
 * From: subscription-spreadsheet.xml
 */
export interface SubscriptionFilterBy extends Element {
	/**
	 * The operator to apply to the filter value. 
	 */
	matchType?: code;
	/**
	 * May contain extended information for property: 'matchType'
	 */
	_matchType?: Element;
	/**
	 * The filter label (=key) as defined in the `Topic.canFilterBy.name`  element
	 */
	name: string;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
	/**
	 * The literal value or resource path as is legal in search - for example, "Patient/123" or "le1950".
	 */
	value: string;
	/**
	 * May contain extended information for property: 'value'
	 */
	_value?: Element;
}
/**
 * Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic
 * From: topic-spreadsheet.xml
 */
export interface Topic extends DomainResource {
	/**
	 * The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage
	 */
	approvalDate?: date;
	/**
	 * May contain extended information for property: 'approvalDate'
	 */
	_approvalDate?: Element;
	/**
	 * List of properties by which messages on the topic can be filtered
	 */
	canFilterBy?: TopicCanFilterBy[];
	/**
	 * May contain extended information for property: 'canFilterBy'
	 */
	_canFilterBy?: Element[];
	/**
	 * Contact details to assist a user in finding and communicating with the publisher
	 */
	contact?: ContactDetail[];
	/**
	 * May contain extended information for property: 'contact'
	 */
	_contact?: Element[];
	/**
	 * A copyright statement relating to the Topic and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Topic
	 */
	copyright?: markdown;
	/**
	 * May contain extended information for property: 'copyright'
	 */
	_copyright?: Element;
	/**
	 * For draft definitions, indicates the date of initial creation.  For active definitions, represents the date of activation.  For withdrawn definitions, indicates the date of withdrawal.
	 */
	date?: dateTime;
	/**
	 * May contain extended information for property: 'date'
	 */
	_date?: Element;
	/**
	 * The canonical URL pointing to another FHIR-defined Topic that is adhered to in whole or in part by this Topic
	 */
	derivedFromCanonical?: canonical[];
	/**
	 * May contain extended information for property: 'derivedFromCanonical'
	 */
	_derivedFromCanonical?: Element[];
	/**
	 * The URL pointing to an externally-defined subscription topic or other definition that is adhered to in whole or in part by this definition.
	 */
	derivedFromUri?: uri[];
	/**
	 * May contain extended information for property: 'derivedFromUri'
	 */
	_derivedFromUri?: Element[];
	/**
	 * A free text natural language description of the Topic from the consumer's perspective
	 */
	description?: markdown;
	/**
	 * May contain extended information for property: 'description'
	 */
	_description?: Element;
	/**
	 * The period during which the Topic content was or is planned to be effective
	 */
	effectivePeriod?: Period;
	/**
	 * May contain extended information for property: 'effectivePeriod'
	 */
	_effectivePeriod?: Element;
	/**
	 * A flag to indicate that this Topic is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage
	 */
	experimental?: boolean;
	/**
	 * May contain extended information for property: 'experimental'
	 */
	_experimental?: Element;
	/**
	 * Business identifiers assigned to this Topic by the performer and/or other systems.  These identifiers remain constant as the resource is updated and propagates from server to server
	 */
	identifier?: Identifier[];
	/**
	 * May contain extended information for property: 'identifier'
	 */
	_identifier?: Element[];
	/**
	 * A jurisdiction in which the Topic is intended to be used
	 */
	jurisdiction?: CodeableConcept[];
	/**
	 * May contain extended information for property: 'jurisdiction'
	 */
	_jurisdiction?: Element[];
	/**
	 * The date on which the asset content was last reviewed. Review happens periodically after that, but doesn't change the original approval date.
	 */
	lastReviewDate?: date;
	/**
	 * May contain extended information for property: 'lastReviewDate'
	 */
	_lastReviewDate?: Element;
	/**
	 * Helps establish the "authority/credibility" of the Topic.  May also allow for contact
	 */
	publisher?: Reference;
	/**
	 * May contain extended information for property: 'publisher'
	 */
	_publisher?: Element;
	/**
	 * Explains why this Topic is needed and why it has been designed as it has
	 */
	purpose?: markdown;
	/**
	 * May contain extended information for property: 'purpose'
	 */
	_purpose?: Element;
	/**
	 * Completed or terminated request(s) whose function is taken by this new request
	 */
	replaces?: canonical[];
	/**
	 * May contain extended information for property: 'replaces'
	 */
	_replaces?: Element[];
	/**
	 * The criteria for including updates to a nominated resource in the topic.  Thie criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression.
	 */
	resourceTrigger?: TopicResourceTrigger;
	/**
	 * May contain extended information for property: 'resourceTrigger'
	 */
	_resourceTrigger?: Element;
	/**
	 * The current state of the Topic
	 */
	status: code;
	/**
	 * May contain extended information for property: 'status'
	 */
	_status?: Element;
	/**
	 * A short, descriptive, user-friendly title for the Topic, for example, "admission".
	 */
	title?: string;
	/**
	 * May contain extended information for property: 'title'
	 */
	_title?: Element;
	/**
	 * An absolute URL that is used to identify this Topic when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Topic is (or will be) published. The URL SHOULD include the major version of the Topic. For more information see [Technical and Business Versions](resource.html#versions)
	 */
	url?: uri;
	/**
	 * May contain extended information for property: 'url'
	 */
	_url?: Element;
	/**
	 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of code system definitions.
	 */
	useContext?: UsageContext[];
	/**
	 * May contain extended information for property: 'useContext'
	 */
	_useContext?: Element[];
	/**
	 * The identifier that is used to identify this version of the Topic when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Topic author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions are orderable
	 */
	version?: string;
	/**
	 * May contain extended information for property: 'version'
	 */
	_version?: Element;
}
/**
 * List of properties by which messages on the topic can be filtered
 * From: topic-spreadsheet.xml
 */
export interface TopicCanFilterBy extends Element {
	/**
	 * Description of how this filter parameter is intended to be used.
	 */
	documentation?: markdown;
	/**
	 * May contain extended information for property: 'documentation'
	 */
	_documentation?: Element;
	/**
	 * A search parameter (like "patient") which is a label for the filter.
	 */
	name?: string;
	/**
	 * May contain extended information for property: 'name'
	 */
	_name?: Element;
}
/**
 * The criteria for including updates to a nominated resource in the topic.  Thie criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression.
 * From: topic-spreadsheet.xml
 */
export interface TopicResourceTrigger extends Element {
	/**
	 * The human readable description of what triggers inclusion into this topic -  for example, "Beginning of a clinical encounter".
	 */
	description?: string;
	/**
	 * May contain extended information for property: 'description'
	 */
	_description?: Element;
	/**
	 * The FHIRPath based rules that the server should use to determine when to trigger a notification for this topic.
	 */
	fhirPathCriteria?: string;
	/**
	 * May contain extended information for property: 'fhirPathCriteria'
	 */
	_fhirPathCriteria?: Element;
	/**
	 * The REST interaction based rules that the server should use to determine when to trigger a notification for this topic.
	 */
	methodCriteria?: code[];
	/**
	 * May contain extended information for property: 'methodCriteria'
	 */
	_methodCriteria?: Element[];
	/**
	 * The FHIR query based rules that the server should use to determine when to trigger a notification for this topic.
	 */
	queryCriteria?: TopicResourceTriggerQueryCriteria;
	/**
	 * May contain extended information for property: 'queryCriteria'
	 */
	_queryCriteria?: Element;
	/**
	 * The list of resource types that are candidates for this topic.  For example, the Encounter resource is updated in an 'admission' topic
	 */
	resourceType?: code[];
	/**
	 * May contain extended information for property: 'resourceType'
	 */
	_resourceType?: Element[];
}
/**
 * The FHIR query based rules that the server should use to determine when to trigger a notification for this topic.
 * From: topic-spreadsheet.xml
 */
export interface TopicResourceTriggerQueryCriteria extends Element {
	/**
	 * The FHIR query based rules are applied to the current resource state.
	 */
	current?: string;
	/**
	 * May contain extended information for property: 'current'
	 */
	_current?: Element;
	/**
	 * The FHIR query based rules are applied to the previous resource state.
	 */
	previous?: string;
	/**
	 * May contain extended information for property: 'previous'
	 */
	_previous?: Element;
	/**
	 *  If set to true, both current and previous criteria must evaluate true to  trigger a notification for this topic.  Otherwise a notification for this topic will be triggered if either one evaluates to true
	 */
	requireBoth?: boolean;
	/**
	 * May contain extended information for property: 'requireBoth'
	 */
	_requireBoth?: Element;
}
} // close module: fhir
