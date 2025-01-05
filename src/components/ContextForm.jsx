import React from 'react';
import { Paper, TextInput, Textarea, Title, Grid, Accordion } from '@mantine/core';

export function ContextForm({ context, setContext }) {
  const handleChange = (section, field, value) => {
    setContext(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <Accordion defaultValue="target">
      <Accordion.Item value="target">
        <Accordion.Control>Target Audience</Accordion.Control>
        <Accordion.Panel>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="Role/Position"
                value={context.target?.role || ''}
                onChange={(e) => handleChange('target', 'role', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Industry"
                value={context.target?.industry || ''}
                onChange={(e) => handleChange('target', 'industry', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Company Size"
                value={context.target?.companySize || ''}
                onChange={(e) => handleChange('target', 'companySize', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Pain Points"
                value={context.target?.painPoints || ''}
                onChange={(e) => handleChange('target', 'painPoints', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Desired Outcome"
                value={context.target?.desiredOutcome || ''}
                onChange={(e) => handleChange('target', 'desiredOutcome', e.target.value)}
              />
            </Grid.Col>
          </Grid>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="offer">
        <Accordion.Control>Offer</Accordion.Control>
        <Accordion.Panel>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="Service/Product Name"
                value={context.offer?.serviceName || ''}
                onChange={(e) => handleChange('offer', 'serviceName', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Price Range"
                value={context.offer?.priceRange || ''}
                onChange={(e) => handleChange('offer', 'priceRange', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Key Deliverables"
                value={context.offer?.keyDeliverables || ''}
                onChange={(e) => handleChange('offer', 'keyDeliverables', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Unique Selling Proposition"
                value={context.offer?.usp || ''}
                onChange={(e) => handleChange('offer', 'usp', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Main Client Results"
                value={context.offer?.clientResults || ''}
                onChange={(e) => handleChange('offer', 'clientResults', e.target.value)}
              />
            </Grid.Col>
          </Grid>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="proof">
        <Accordion.Control>Proof Elements</Accordion.Control>
        <Accordion.Panel>
          <Grid>
            <Grid.Col span={12}>
              <Textarea
                label="Client Success Stories"
                value={context.proof?.successStories || ''}
                onChange={(e) => handleChange('proof', 'successStories', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Personal Achievements"
                value={context.proof?.achievements || ''}
                onChange={(e) => handleChange('proof', 'achievements', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Industry Experience"
                value={context.proof?.experience || ''}
                onChange={(e) => handleChange('proof', 'experience', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Credentials"
                value={context.proof?.credentials || ''}
                onChange={(e) => handleChange('proof', 'credentials', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Results Delivered"
                value={context.proof?.results || ''}
                onChange={(e) => handleChange('proof', 'results', e.target.value)}
              />
            </Grid.Col>
          </Grid>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="content">
        <Accordion.Control>Content Strategy</Accordion.Control>
        <Accordion.Panel>
          <Grid>
            <Grid.Col span={12}>
              <Textarea
                label="Primary Goals"
                value={context.content?.goals || ''}
                onChange={(e) => handleChange('content', 'goals', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Content Types"
                value={context.content?.types || ''}
                onChange={(e) => handleChange('content', 'types', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Areas of Expertise"
                value={context.content?.expertise || ''}
                onChange={(e) => handleChange('content', 'expertise', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Methodologies/Frameworks"
                value={context.content?.methodologies || ''}
                onChange={(e) => handleChange('content', 'methodologies', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Brand Voice"
                value={context.content?.brandVoice || ''}
                onChange={(e) => handleChange('content', 'brandVoice', e.target.value)}
              />
            </Grid.Col>
          </Grid>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="lead">
        <Accordion.Control>Lead Generation</Accordion.Control>
        <Accordion.Panel>
          <Grid>
            <Grid.Col span={12}>
              <Textarea
                label="Lead Magnet Details"
                value={context.lead?.magnetDetails || ''}
                onChange={(e) => handleChange('lead', 'magnetDetails', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Call-to-Action Type"
                value={context.lead?.ctaType || ''}
                onChange={(e) => handleChange('lead', 'ctaType', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Conversion Goal"
                value={context.lead?.conversionGoal || ''}
                onChange={(e) => handleChange('lead', 'conversionGoal', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Follow-up Approach"
                value={context.lead?.followUp || ''}
                onChange={(e) => handleChange('lead', 'followUp', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Qualification Criteria"
                value={context.lead?.qualificationCriteria || ''}
                onChange={(e) => handleChange('lead', 'qualificationCriteria', e.target.value)}
              />
            </Grid.Col>
          </Grid>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="differentiators">
        <Accordion.Control>Differentiators</Accordion.Control>
        <Accordion.Panel>
          <Grid>
            <Grid.Col span={12}>
              <Textarea
                label="Unique Methodology"
                value={context.differentiators?.methodology || ''}
                onChange={(e) => handleChange('differentiators', 'methodology', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Special Background"
                value={context.differentiators?.background || ''}
                onChange={(e) => handleChange('differentiators', 'background', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Market Position"
                value={context.differentiators?.marketPosition || ''}
                onChange={(e) => handleChange('differentiators', 'marketPosition', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Competition Differences"
                value={context.differentiators?.competitionDiff || ''}
                onChange={(e) => handleChange('differentiators', 'competitionDiff', e.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Value Proposition"
                value={context.differentiators?.valueProposition || ''}
                onChange={(e) => handleChange('differentiators', 'valueProposition', e.target.value)}
              />
            </Grid.Col>
          </Grid>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
