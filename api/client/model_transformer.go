/*
 * Merlin
 *
 * API Guide for accessing Merlin's model management, deployment, and serving functionalities
 *
 * API version: 0.7.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

import (
	"time"
)

type Transformer struct {
	Enabled         bool             `json:"enabled,omitempty"`
	TransformerType string           `json:"transformer_type,omitempty"`
	Image           string           `json:"image,omitempty"`
	Command         string           `json:"command,omitempty"`
	Args            string           `json:"args,omitempty"`
	ResourceRequest *ResourceRequest `json:"resource_request,omitempty"`
	EnvVars         []EnvVar         `json:"env_vars,omitempty"`
	CreatedAt       time.Time        `json:"created_at,omitempty"`
	UpdatedAt       time.Time        `json:"updated_at,omitempty"`
}
