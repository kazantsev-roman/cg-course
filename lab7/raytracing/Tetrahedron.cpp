#include "stdafx.h"
#include "Tetrahedron.h"
#include "Ray.h"
#include "Intersection.h"

std::vector<Vertex> tetrahedronVertices = {
	Vertex({-1, 0, 1}), // 0
	Vertex({1, 0, 1}), // 1
	Vertex({0, 0, -1}), // 2
	Vertex({0, 2, 0}) // 3
};

std::vector<Face> tetrahedronFaces = {
	Face(0, 2, 1),
	Face(3, 0, 1),
	Face(3, 1, 2),
	Face(3, 2, 0),
};

CTetrahedron::CTetrahedron(CMatrix4d const& transform)
	:CGeometryObjectWithInitialTransformImpl(transform)
	, m_triangleMesh(nullptr)
{
	CTriangleMeshData* triangleMeshData = new CTriangleMeshData(tetrahedronVertices, tetrahedronFaces);
	m_triangleMesh = CTriangleMesh(triangleMeshData, transform);
}

bool CTetrahedron::Hit(CRay const& ray, CIntersection& intersection)const
{
	return m_triangleMesh.Hit(ray, intersection);
}
