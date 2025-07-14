import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HomeLogo from '../components/HomeLogo';
import { useLocation } from '../context/LocationContext';

import Grid from '@cloudscape-design/components/grid';
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Cards from '@cloudscape-design/components/cards';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import Input from '@cloudscape-design/components/input';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import Badge from '@cloudscape-design/components/badge';
import Icon from '@cloudscape-design/components/icon';
import ContentLayout from '@cloudscape-design/components/content-layout';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import KeyValuePairs from '@cloudscape-design/components/key-value-pairs';
import ProgressBar from '@cloudscape-design/components/progress-bar';
import Link from '@cloudscape-design/components/link';
import TextContent from '@cloudscape-design/components/text-content';

const Home = () => {
  const { location } = useLocation();

  const HeroSection = () => (
    <div className="relative h-[70vh] bg-gradient-to-br from-aws-dark-blue via-aws-background to-gray-950 overflow-hidden">
      {/* Background pattern inspired by AWS Q */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-aws-orange rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-aws-orange rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-aws-orange rounded-full"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 animate-fade-in">
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-aws-orange/10 border border-aws-orange/20 rounded-full mb-6">
            <Icon name="status-positive" className="text-aws-orange mr-2" />
            <span className="text-aws-orange font-medium">Powered by AI-driven matching</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Errand, Simplified
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-300 leading-relaxed">
          Post a task. Connect instantly. Get help anywhere — powered by local experts and intelligent matching.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button variant="primary" size="large" iconName="add-plus">
            Create your first task
          </Button>
          <Button variant="normal" size="large" iconName="search">
            Browse services
          </Button>
        </div>
      </div>
    </div>
  );

  const statsData = [
    { label: "Active Tasks", value: "1,247", trend: "up", change: "+12%" },
    { label: "Service Providers", value: "856", trend: "up", change: "+8%" },
    { label: "Completed Today", value: "94", trend: "up", change: "+15%" },
    { label: "Average Rating", value: "4.8", trend: "stable", change: "★★★★★" },
  ];

  return (
    <div className="dark bg-gray-950 text-white min-h-screen">
      <HeroSection />

      <div className="px-6 py-12 bg-gradient-to-b from-gray-950 to-aws-background">
        <ContentLayout
          header={
            <SpaceBetween size="m">
              <BreadcrumbGroup
                items={[
                  { text: "Errand Console", href: "/" },
                  { text: "Dashboard", href: "/" },
                ]}
              />
              <Header
                variant="h1"
                description="Monitor your service marketplace activity and manage your tasks with AI-powered insights"
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button iconName="refresh">Refresh</Button>
                    <Button variant="primary" iconName="add-plus">
                      Create new task
                    </Button>
                  </SpaceBetween>
                }
              >
                Service Dashboard
              </Header>
            </SpaceBetween>
          }
        >
          <SpaceBetween size="l">
            {/* Stats Overview */}
            <div className="animate-slide-up">
              <Grid
                gridDefinition={[
                  { colspan: { default: 12, xs: 6, s: 3 } },
                  { colspan: { default: 12, xs: 6, s: 3 } },
                  { colspan: { default: 12, xs: 6, s: 3 } },
                  { colspan: { default: 12, xs: 6, s: 3 } },
                ]}
              >
                {statsData.map((stat, index) => (
                  <Container key={index}>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-aws-orange mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 mb-2">
                        {stat.label}
                      </div>
                      <div className="flex items-center justify-center">
                        <StatusIndicator 
                          type={stat.trend === 'up' ? 'success' : 'info'}
                        >
                          {stat.change}
                        </StatusIndicator>
                      </div>
                    </div>
                  </Container>
                ))}
              </Grid>
            </div>

            {/* Quick Actions */}
            <Container
              header={
                <Header variant="h2">
                  Quick Actions
                </Header>
              }
            >
              <ColumnLayout columns={3} variant="text-grid">
                <div className="text-center p-6 border border-gray-700 rounded-lg hover:border-aws-orange transition-colors">
                  <Icon name="add-plus" size="large" className="text-aws-orange mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Post a Task</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Describe what you need help with and get matched with local experts
                  </p>
                  <Button variant="primary" fullWidth>Get Started</Button>
                </div>
                
                <div className="text-center p-6 border border-gray-700 rounded-lg hover:border-aws-orange transition-colors">
                  <Icon name="search" size="large" className="text-aws-orange mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Find Services</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Browse available services and providers in your area
                  </p>
                  <Button fullWidth>Browse Now</Button>
                </div>
                
                <div className="text-center p-6 border border-gray-700 rounded-lg hover:border-aws-orange transition-colors">
                  <Icon name="user-profile" size="large" className="text-aws-orange mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Become a Provider</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Start earning by offering your skills and services
                  </p>
                  <Button fullWidth>Join Now</Button>
                </div>
              </ColumnLayout>
            </Container>

            {/* Recent Activity */}
            <Container
              header={
                <Header 
                  variant="h2"
                  actions={
                    <Button iconName="external">View all</Button>
                  }
                >
                  Recent Activity
                </Header>
              }
            >
              <div className="space-y-4">
                {[
                  { type: "Task Created", title: "House Cleaning Service", time: "2 hours ago", status: "pending" },
                  { type: "Service Completed", title: "Grocery Shopping", time: "4 hours ago", status: "success" },
                  { type: "New Provider", title: "John D. joined as Handyman", time: "6 hours ago", status: "info" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <StatusIndicator type={activity.status === 'success' ? 'success' : activity.status === 'pending' ? 'pending' : 'info'} />
                      <div>
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-gray-400">{activity.type}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </SpaceBetween>
        </ContentLayout>
      </div>
    </div>
  );
};

export default Home;
