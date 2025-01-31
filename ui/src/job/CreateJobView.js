/**
 * Copyright 2020 The Merlin Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { EuiPageTemplate, EuiSpacer } from "@elastic/eui";
import { JobFormContextProvider } from "./form/context";
import { JobForm } from "./form/JobForm";
import { Job } from "./job";
import PropTypes from "prop-types";

export const CreateJobView = ({ projectId, modelId, versionId }) => {
  return (
    <EuiPageTemplate restrictWidth="90%" paddingSize="none">
      <EuiSpacer size="l" />
      <EuiPageTemplate.Header
        bottomBorder={false}
        iconType={"machineLearningApp"}
        pageTitle="Prediction Jobs"
      />
      <EuiPageTemplate.Section color="transparent">
        <JobFormContextProvider job={new Job(projectId, modelId, versionId)}>
          <JobForm projectId={projectId} modelId={modelId} versionId={versionId} />
        </JobFormContextProvider>
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};

CreateJobView.propTypes = {
  projectId: PropTypes.string,
  modelId: PropTypes.string,
  versionId: PropTypes.string
};
